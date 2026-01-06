"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { DealGrid } from "@/components/deals/DealGrid";
import { Tabs } from "@/components/ui";
import { deals } from "@/lib/data/deals";
import { DealCategory } from "@/types";

const PAGE_TITLE = "Alle Deals";
const PAGE_DESCRIPTION =
  "Filtere die neuesten Deals, finde die besten Rabatte und sichere dir Angebote vor dem Ablauf.";
const BACK_TO_TOP_LABEL = "Back to top";

const CATEGORY_TABS: Array<{ label: string; value: DealCategory | "Alle" }> = [
  { label: "Alle Kategorien", value: "Alle" },
  { label: "Elektronik", value: "Elektronik" },
  { label: "Mode", value: "Mode" },
  { label: "Haushalt", value: "Haushalt" },
  { label: "Sport", value: "Sport" },
  { label: "Gaming", value: "Gaming" }
];

const SORT_TABS = [
  { label: "Neueste", value: "latest" },
  { label: "Beste Rabatte", value: "discount" },
  { label: "Ablaufend", value: "expiring" }
] as const;

type SortValue = (typeof SORT_TABS)[number]["value"];

export const DealsPageContent = () => {
  const [activeCategory, setActiveCategory] = useState<DealCategory | "Alle">("Alle");
  const [activeSort, setActiveSort] = useState<SortValue>("latest");
  const reduceMotion = useReducedMotion();

  const filteredDeals = useMemo(() => {
    const filtered =
      activeCategory === "Alle"
        ? deals
        : deals.filter((deal) => deal.category === activeCategory);

    const sorted = [...filtered].sort((a, b) => {
      if (activeSort === "discount") {
        return b.discount - a.discount;
      }
      if (activeSort === "expiring") {
        return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      }
      return new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime();
    });

    return sorted;
  }, [activeCategory, activeSort]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-white">{PAGE_TITLE}</h1>
        <p className="text-white/70">{PAGE_DESCRIPTION}</p>
      </header>

      <div className="flex flex-col gap-6">
        <Tabs items={CATEGORY_TABS} active={activeCategory} onChange={setActiveCategory} />
        <Tabs items={SORT_TABS} active={activeSort} onChange={setActiveSort} />
      </div>

      <DealGrid deals={filteredDeals} />

      <motion.button
        type="button"
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        className="fixed bottom-6 right-6 rounded-full border border-white/10 bg-emerald-500 p-3 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={BACK_TO_TOP_LABEL}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
};
