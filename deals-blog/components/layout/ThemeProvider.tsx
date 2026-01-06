"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = stored ? stored === "dark" : true;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme: () => setIsDark((prev) => !prev)
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
