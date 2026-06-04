# KNI — Computer Science Students' Association Website

Landing page for the Computer Science Students' Association (KNI) at the Maritime University of Szczecin.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **shadcn/ui** (base-nova / @base-ui/react)
- **Framer Motion**

## Local development

```bash
npm install
npm run dev
```

Available at `http://localhost:3000`.

## Build

```bash
npm run build
```

Output is generated in the `out/` directory as a static site.

## Structure

```
app/
  page.tsx          # Main page — assembles all sections
  globals.css       # Tailwind v4 theme (@theme inline)
  layout.tsx        # Fonts (Inter, Geist Mono), metadata

components/
  Navbar.tsx        # Navigation with mobile sheet
  Hero.tsx          # Hero section
  About.tsx         # About + stats
  Projects.tsx      # Projects with filtering
  Events.tsx        # Oblicza IT (photo carousel)
  Hackathons.tsx    # Hackathons (photo carousel)
  AutoCarousel.tsx  # Reusable carousel with Ken Burns + crossfade
  Team.tsx          # Team members with avatars and Discord tags
  Join.tsx          # How to join
  FAQ.tsx           # Frequently asked questions
  Discord.tsx       # Discord server widget
  Footer.tsx        # Footer

public/
  logo/             # KNI logos (color variants, PL/EN)
  members/          # Team member photos
  projects/         # Project screenshots
  hackathons/       # Hackathon photos
  oblicza_it/       # Oblicza IT event photos
```
