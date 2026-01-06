"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps {
  children: ReactNode;
  className?: string;
}

export const CardHoverEffect = ({ children, className }: CardHoverEffectProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_60%)]" />
        <div className="absolute -bottom-24 right-[-20%] h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};
