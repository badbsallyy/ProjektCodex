"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Deal } from "@/types";
import { DealCard } from "@/components/deals/DealCard";

interface DealGridProps {
  deals: Deal[];
}

export const DealGrid = ({ deals }: DealGridProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {deals.map((deal, index) => (
        <motion.div
          key={deal.id}
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <DealCard deal={deal} />
        </motion.div>
      ))}
    </div>
  );
};
