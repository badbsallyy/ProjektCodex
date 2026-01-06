"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundBeams = ({ children, className }: BackgroundBeamsProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-black/70",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-20 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 120, 0], y: [0, 60, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute right-0 top-10 h-[30rem] w-[30rem] rounded-full bg-emerald-500/20 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -100, 0], y: [0, -40, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
