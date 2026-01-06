"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const AuroraBackground = ({ children, className }: AuroraBackgroundProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/40",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-0 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.35),_transparent_60%)] blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 80, -40, 0],
                  y: [0, -60, 40, 0]
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        />
        <motion.div
          className="absolute bottom-0 right-[-10%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.35),_transparent_60%)] blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -60, 40, 0],
                  y: [0, 40, -40, 0]
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
