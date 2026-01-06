import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DealCountdown } from "@/components/deals/DealCountdown";
import { DealGrid } from "@/components/deals/DealGrid";
import { BackgroundGradient, MovingBorder, Sparkles } from "@/components/ui";
import { deals } from "@/lib/data/deals";
import { formatPrice, formatDate } from "@/lib/utils";

const PAGE_DESCRIPTION =
  "Alle Details zum Deal inklusive Preisvergleich, Ablaufdatum und ähnlichen Angeboten.";

const DEAL_BUTTON_TEXT = "Zum Deal";
const SIMILAR_TITLE = "Ähnliche Deals";
const BREADCRUMB_LABELS = {
  home: "Home",
  deals: "Deals"
};
const EXPIRY_LABEL = "Ablauf";
const DISCOUNT_LABEL = "Rabatt";
const BREADCRUMB_SEPARATOR = "/";
const DOT_SEPARATOR = "·";

interface DealPageProps {
  params: { slug: string };
}

const buildParagraphs = (description: string) => [
  description,
  "Dieser Deal überzeugt nicht nur durch den Rabatt, sondern auch durch eine starke Kombination aus Qualität und Nutzwert. Achte auf den Ablauf des Angebots, denn beliebte Produkte sind schnell vergriffen und die Preise können kurzfristig wieder steigen.",
  "Wenn du den Deal sichern möchtest, empfiehlt sich ein schneller Checkout und ein Blick auf die Lieferzeiten. Vergleiche optional ähnliche Produkte, falls du eine andere Farbe, Größe oder Ausstattung bevorzugst."
];

export const generateMetadata = ({ params }: DealPageProps): Metadata => {
  const deal = deals.find((item) => item.slug === params.slug);
  if (!deal) {
    return { title: "Deal nicht gefunden" };
  }
  return {
    title: `${deal.title} – DealPulse`,
    description: PAGE_DESCRIPTION,
    openGraph: {
      title: deal.title,
      description: deal.description,
      images: [deal.imageUrl]
    }
  };
};

export default function DealDetailPage({ params }: DealPageProps) {
  const deal = deals.find((item) => item.slug === params.slug);

  if (!deal) {
    notFound();
  }

  const similarDeals = deals
    .filter((item) => item.category === deal.category && item.id !== deal.id)
    .slice(0, 3);

  const paragraphs = buildParagraphs(deal.description);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: deal.title,
    image: [deal.imageUrl],
    description: deal.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: deal.salePrice,
      url: deal.affiliateLink,
      priceValidUntil: deal.expiryDate
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20">
      <nav className="text-sm text-white/60">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white">
              {BREADCRUMB_LABELS.home}
            </Link>
          </li>
          <li>{BREADCRUMB_SEPARATOR}</li>
          <li>
            <Link href="/deals" className="hover:text-white">
              {BREADCRUMB_LABELS.deals}
            </Link>
          </li>
          <li>{BREADCRUMB_SEPARATOR}</li>
          <li className="text-white/80">{deal.category}</li>
          <li>{BREADCRUMB_SEPARATOR}</li>
          <li className="text-white">{deal.title}</li>
        </ol>
      </nav>

      <section className="grid gap-10 lg:grid-cols-2">
        <BackgroundGradient>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <Image
              src={deal.imageUrl}
              alt={deal.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </BackgroundGradient>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              {deal.shopName} {DOT_SEPARATOR} {EXPIRY_LABEL} {formatDate(deal.expiryDate)}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              <Sparkles>{deal.title}</Sparkles>
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-lg text-white/50 line-through">
              {formatPrice(deal.originalPrice)}
            </p>
            <p className="text-3xl font-semibold text-emerald-300">
              {formatPrice(deal.salePrice)}
            </p>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
              {deal.discount}% {DISCOUNT_LABEL}
            </span>
          </div>
          <a href={deal.affiliateLink} target="_blank" rel="noreferrer">
            <MovingBorder>{DEAL_BUTTON_TEXT}</MovingBorder>
          </a>
          <DealCountdown expiryDate={deal.expiryDate} />
          <div className="space-y-4 text-white/70">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">{SIMILAR_TITLE}</h2>
        <DealGrid deals={similarDeals} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
