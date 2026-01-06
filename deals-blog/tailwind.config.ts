import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))"
      },
      animation: {
        "border-beam": "border-beam 2s ease infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        "border-beam": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" }
        },
        shimmer: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "-200% 0%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
