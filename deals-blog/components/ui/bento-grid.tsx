import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>{children}</div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  icon,
  className
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur",
        className
      )}
    >
      <div className="mb-4 text-emerald-400">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
};
