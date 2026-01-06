import type { Metadata } from "next";
import { DealHero } from "@/components/deals/DealHero";
import { DealGrid } from "@/components/deals/DealGrid";
import { deals } from "@/lib/data/deals";

const PAGE_TITLE = "Deals Blog – Die besten Deals des Tages";
const PAGE_DESCRIPTION =
  "Entdecke die besten Deals des Tages, kuratierte Rabatte und exklusive Shopping-Tipps.";
const FEATURED_TITLE = "Featured Deals";
const FEATURED_DESCRIPTION =
  "Handverlesene Angebote mit maximalem Preisvorteil und kurzen Laufzeiten.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

const FEATURED_DEALS = deals.filter((deal) => deal.isFeatured).slice(0, 6);

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 px-6 pb-20">
      <DealHero />
      <section id="featured-deals" className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-white">{FEATURED_TITLE}</h2>
          <p className="text-white/70">{FEATURED_DESCRIPTION}</p>
        </div>
        <DealGrid deals={FEATURED_DEALS} />
      </section>
    </div>
  );
}
