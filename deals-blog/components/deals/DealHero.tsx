"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AuroraBackground, MovingBorder, Sparkles } from "@/components/ui";

const HERO_TITLE = "Die besten Deals des Tages";
const HERO_SUBTITLE =
  "Mit kuratierten Angeboten, exklusiven Rabatten und limitierten Aktionen sparst du smarter.";
const HERO_CTA = "Jetzt Deals entdecken";

export const DealHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <AuroraBackground className="mx-auto max-w-6xl px-8 py-20">
      <div className="flex flex-col items-start gap-8">
        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-white md:text-6xl"
        >
          {HERO_TITLE}
        </motion.h1>
        <p className="max-w-2xl text-lg text-white/70">
          <Sparkles>{HERO_SUBTITLE}</Sparkles>
        </p>
        <a href="#featured-deals">
          <MovingBorder>{HERO_CTA}</MovingBorder>
        </a>
      </div>
    </AuroraBackground>
  );
};
