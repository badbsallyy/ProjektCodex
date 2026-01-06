"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabItem<T extends string> {
  label: string;
  value: T;
}

interface TabsProps<T extends string> {
  items: Array<TabItem<T>>;
  active: T;
  onChange: (value: T) => void;
  className?: string;
}

export const Tabs = <T extends string>({ items, active, onChange, className }: TabsProps<T>) => {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={cn(
            "relative rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition",
            active === item.value && "border-emerald-400 text-white"
          )}
        >
          {active === item.value ? (
            <motion.span
              layoutId="tab-highlight"
              className="absolute inset-0 -z-10 rounded-full bg-emerald-500/15"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          ) : null}
          {item.label}
        </button>
      ))}
    </div>
  );
};
