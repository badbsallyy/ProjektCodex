# DealPulse – Aceternity UI Deals-Blog

## Setup

```bash
npm install
npm run dev
```

Die Anwendung läuft danach unter `http://localhost:3000`.

## Verwendete Aceternity UI Komponenten

- Aurora Background
- Card Hover Effect
- Sparkles
- Background Gradient
- Moving Border
- Floating Navbar
- Background Beams
- Bento Grid

## Deals hinzufügen

Alle Deal-Daten liegen in `lib/data/deals.ts`. Um neue Deals zu ergänzen:

1. Neues Objekt im `deals` Array anlegen.
2. `slug`, `category`, `expiryDate` und `imageUrl` setzen.
3. Sicherstellen, dass Beschreibung, Preise und Rabattfelder vollständig sind.

## Blog-Artikel hinzufügen

Blog-Artikel befinden sich in `lib/data/blog.ts`. Jeder Eintrag enthält `title`, `slug`, `excerpt`, `content`, `date` und `readTime`.
