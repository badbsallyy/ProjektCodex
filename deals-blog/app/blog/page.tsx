import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { blogPosts } from "@/lib/data/blog";

const PAGE_TITLE = "DealPulse Blog";
const PAGE_DESCRIPTION =
  "Strategien, Ratgeber und News rund ums Sparen, Cashback und Online-Shopping.";

const HERO_TITLE = "DealPulse Insights";
const HERO_SUBTITLE =
  "Trends, Guides und Insider-Tipps für smarteres Sparen im Alltag.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20">
      <BackgroundBeams className="px-8 py-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            {HERO_TITLE}
          </h1>
          <p className="max-w-2xl text-white/70">{HERO_SUBTITLE}</p>
        </div>
      </BackgroundBeams>
      <BlogGrid posts={blogPosts} />
    </div>
  );
}
