# KNI — Strona internetowa Koła Naukowego Informatyki

Strona landing page Koła Naukowego Informatyki Politechniki Morskiej w Szczecinie.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **shadcn/ui** (base-nova / @base-ui/react)
- **Framer Motion**

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona dostępna pod `http://localhost:3000`.

## Budowanie

```bash
npm run build
```

## Struktura

```
app/
  page.tsx          # Główna strona — składa wszystkie sekcje
  globals.css       # Tailwind v4 theme (@theme inline)
  layout.tsx        # Fonty (Inter, Geist Mono), metadane

components/
  Navbar.tsx        # Nawigacja z mobile sheet
  Hero.tsx          # Sekcja główna
  About.tsx         # O kole + statystyki
  Projects.tsx      # Projekty z filtrowaniem
  Events.tsx        # Oblicza IT (karuzela zdjęć)
  Hackathons.tsx    # Hackathony (karuzela zdjęć)
  AutoCarousel.tsx  # Reużywalna karuzela z Ken Burns + crossfade
  Team.tsx          # Zespół z avatarami i tagami Discord
  Join.tsx          # Jak dołączyć
  FAQ.tsx           # Najczęstsze pytania
  Discord.tsx       # Widget serwera Discord
  Footer.tsx        # Stopka

public/
  logo/             # Logo KNI (warianty kolorystyczne, PL/EN)
  members/          # Zdjęcia członków zespołu
  projects/         # Zdjęcia projektów
  hackathons/       # Zdjęcia z hackathonów
  oblicza_it/       # Zdjęcia z eventów Oblicza IT
```
