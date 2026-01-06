import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundGradient = ({ children, className }: BackgroundGradientProps) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent p-[1px]",
        className
      )}
    >
      <div className="rounded-[calc(1.5rem-1px)] bg-black/70 p-6 backdrop-blur">
        {children}
      </div>
    </div>
  );
};
