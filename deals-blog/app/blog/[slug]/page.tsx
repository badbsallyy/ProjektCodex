import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { BlogHeroImage } from "@/components/blog/BlogHeroImage";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

const PAGE_DESCRIPTION =
  "Ausführlicher Artikel mit Tipps, Strategien und Hintergrundwissen rund ums Sparen.";

const BACK_LABEL = "Zurück zur Übersicht";
const SHARE_LABEL = "Teilen";
const RELATED_LABEL = "Related Articles";
const TAKEAWAYS_TITLE = "Key Takeaways";
const TAKEAWAYS = [
  "Plane deine Deal-Strategie vor großen Aktionen.",
  "Nutze Preisverläufe, um echte Rabatte zu erkennen.",
  "Kombiniere Cashback, Gutscheine und Budgets."
];
const DOT_SEPARATOR = "·";
const SHARE_BASE_URL = "https://dealpulse.local";

interface BlogDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = ({ params }: BlogDetailPageProps): Metadata => {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Artikel nicht gefunden" };
  }
  return {
    title: `${post.title} – DealPulse Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl]
    }
  };
};

const SOCIAL_ICONS = [
  { icon: Twitter, name: "Twitter" },
  { icon: Facebook, name: "Facebook" },
  { icon: Linkedin, name: "LinkedIn" }
];

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);
  const shareUrl = `${SHARE_BASE_URL}/blog/${post.slug}`;

  const shareLinks = {
    Twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 pb-20">
      <Link href="/blog" className="text-sm text-white/60 hover:text-white">
        {BACK_LABEL}
      </Link>

      <BlogHeroImage imageUrl={post.imageUrl} title={post.title} />

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          {formatDate(post.date)} {DOT_SEPARATOR} {post.readTime}
        </p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          {post.title}
        </h1>
        <p className="text-white/70">{post.excerpt}</p>
      </div>

      <article className="space-y-6 text-white/80">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
          <h2 className="mb-3 text-xl font-semibold">{TAKEAWAYS_TITLE}</h2>
          <ul className="list-disc space-y-2 pl-6 text-white/70">
            {TAKEAWAYS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">{SHARE_LABEL}</h2>
        <div className="flex gap-3">
          {SOCIAL_ICONS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={shareLinks[item.name as keyof typeof shareLinks]}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:text-emerald-300 hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                aria-label={item.name}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">{RELATED_LABEL}</h2>
        <BlogGrid posts={related} />
      </section>
    </div>
  );
}
