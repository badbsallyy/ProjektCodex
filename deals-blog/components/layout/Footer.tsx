import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { MovingBorder } from "@/components/ui";

const FOOTER_COLUMNS = [
  {
    title: "Über uns",
    items: [
      { label: "Unsere Mission", href: "/" },
      { label: "Transparenz", href: "/" },
      { label: "Kontakt", href: "/" }
    ]
  },
  {
    title: "Quick Links",
    items: [
      { label: "Deals", href: "/deals" },
      { label: "Blog", href: "/blog" },
      { label: "Kategorien", href: "/deals" }
    ]
  }
];

const NEWSLETTER_TITLE = "Newsletter";
const NEWSLETTER_DESCRIPTION =
  "Erhalte wöchentliche Deal-Updates direkt in dein Postfach.";
const NEWSLETTER_PLACEHOLDER = "deine@email.de";
const NEWSLETTER_BUTTON = "Anmelden";

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin }
];

const COPYRIGHT_TEXT = "© 2025 DealPulse. Alle Rechte vorbehalten.";
const LEGAL_LINKS = [
  { label: "Impressum", href: "/" },
  { label: "Datenschutz", href: "/" }
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/90 px-6 py-16 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            {NEWSLETTER_TITLE}
          </h3>
          <p className="mb-4 text-sm text-white/60">{NEWSLETTER_DESCRIPTION}</p>
          <form className="flex flex-col gap-3">
            <MovingBorder>
              <input
                type="email"
                placeholder={NEWSLETTER_PLACEHOLDER}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
            </MovingBorder>
            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              {NEWSLETTER_BUTTON}
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-sm text-white/50">{COPYRIGHT_TEXT}</p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-emerald-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-4 text-sm">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
