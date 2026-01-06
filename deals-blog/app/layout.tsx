import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SITE_TITLE = "DealPulse – Die besten Deals des Tages";
const SITE_DESCRIPTION =
  "DealPulse liefert täglich die besten Deals, Rabatt-Insights und Shopping-Tipps mit Aceternity UI.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="pt-24 lg:pt-32">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
