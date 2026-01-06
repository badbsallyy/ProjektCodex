import type { Metadata } from "next";
import { DealsPageContent } from "@/components/deals/DealsPageContent";

const PAGE_TITLE = "DealPulse – Alle Deals";
const PAGE_DESCRIPTION =
  "Filtere die neuesten Deals nach Kategorien, Rabatten und Ablaufdatum.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  }
};

export default function DealsPage() {
  return <DealsPageContent />;
}
