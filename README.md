# KNI — Computer Science Association Website

Landing page for the Computer Science Association (KNI) at the Maritime University of Szczecin.

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
       globals.css       # Tailwind v4 theme (config via @theme inline)
       layout.tsx        # Fonts (Inter, Geist Mono), metadata
       api/contact/      # API Route for form submissions
       join/             # Join page (membership registration)
       regulamin/        # Rules and regulations page

components/
      Navbar.tsx        # Navigation with mobile sheet
      Hero.tsx          # Hero section
      About.tsx         # About section with stats
      Projects.tsx      # Projects section with filtering (client component)
      Events.tsx        # Oblicza IT (photo carousel)
      Hackathons.tsx    # Hackathons carousel with dynamic conditional headers (client component)
      AutoCarousel.tsx  # Reusable carousel with onIndexChange notification support
      Team.tsx          # Team section with custom avatar positioning and updated roles
      ContactForm.tsx   # Form 
      Join.tsx          # "How to join" informational section
      FAQ.tsx           # Accordion-based FAQ (client component)
      Discord.tsx       # Discord server widget
      Footer.tsx        # Footer
public/
      logo/             # KNI logos (color variants, PL/EN)
      members/          # Team photos 
      projects/         # Project screenshots
      hackathons/       # Hackathon photos 
      oblicza_it/       # Oblicza IT event photos
```
