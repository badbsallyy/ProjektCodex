"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  children: ReactNode;
  className?: string;
}

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }
};

export const Sparkles = ({ children, className }: SparklesProps) => {
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {children}
      <motion.span
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute -left-3 -top-3 h-2 w-2 rounded-full bg-emerald-400"
      />
      <motion.span
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
        className="absolute -right-2 top-0 h-1.5 w-1.5 rounded-full bg-cyan-300"
      />
      <motion.span
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
        className="absolute right-1 -bottom-2 h-2 w-2 rounded-full bg-emerald-500"
      />
    </span>
  );
};
