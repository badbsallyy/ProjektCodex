"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: ReactNode;
  className?: string;
}

export const MovingBorder = ({ children, className }: MovingBorderProps) => {
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden rounded-full p-[1px]",
        className
      )}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.6),rgba(34,211,238,0.6),rgba(34,197,94,0.6))]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
      <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg">
        {children}
      </span>
    </div>
  );
};
