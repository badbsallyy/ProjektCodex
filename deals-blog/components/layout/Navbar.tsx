"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";
import { FloatingNavbar } from "@/components/ui";
import { useTheme } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Deals", href: "/deals" },
  { name: "Blog", href: "/blog" }
];

const CATEGORIES = ["Elektronik", "Mode", "Haushalt", "Sport", "Gaming"] as const;

const LOGO_TEXT = "DealPulse";
const CATEGORY_LABEL = "Kategorien";
const THEME_TOGGLE_LABEL = "Toggle theme";
const NAV_TOGGLE_LABEL = "Toggle navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const logo = (
    <Link
      href="/"
      className="text-lg font-semibold text-white transition hover:text-emerald-300 hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]"
    >
      {LOGO_TEXT}
    </Link>
  );

  return (
    <>
      <FloatingNavbar
        items={NAV_ITEMS}
        className="hidden lg:flex"
        logo={logo}
        rightSlot={
          <>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
              >
                {CATEGORY_LABEL}
                <ChevronDown
                  className={cn("h-4 w-4 transition", isDropdownOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {isDropdownOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-3 w-44 rounded-2xl border border-white/10 bg-black/90 p-4 shadow-xl"
                  >
                    <div className="flex flex-col gap-2">
                      {CATEGORIES.map((category) => (
                        <span key={category} className="text-sm text-white/70">
                          {category}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-white"
              aria-label={THEME_TOGGLE_LABEL}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </>
        }
      />
      <nav className="fixed top-0 z-50 w-full lg:hidden">
        <div className="flex items-center justify-between border-b border-white/10 bg-black/70 px-5 py-4 backdrop-blur">
          {logo}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-white"
              aria-label={THEME_TOGGLE_LABEL}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-white"
              aria-label={NAV_TOGGLE_LABEL}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-b border-white/10 bg-black/90 px-5 py-6"
            >
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base text-white/80"
                  >
                    {item.name}
                  </Link>
                ))}
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-base text-white/80"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    {CATEGORY_LABEL}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isDropdownOpen ? (
                    <div className="mt-3 flex flex-col gap-2">
                      {CATEGORIES.map((category) => (
                        <span key={category} className="text-sm text-white/60">
                          {category}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </>
  );
};
