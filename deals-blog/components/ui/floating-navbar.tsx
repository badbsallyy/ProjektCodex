"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FloatingNavItem {
  name: string;
  href: string;
}

interface FloatingNavbarProps {
  items: FloatingNavItem[];
  className?: string;
  logo?: ReactNode;
  rightSlot?: ReactNode;
}

export const FloatingNavbar = ({
  items,
  className,
  logo,
  rightSlot
}: FloatingNavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed left-1/2 top-6 z-50 w-[min(92vw,1180px)] -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur",
        className
      )}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {logo}
          <div className="flex items-center gap-4">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">{rightSlot}</div>
      </div>
    </motion.nav>
  );
};
