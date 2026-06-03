# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (check terminal for port, may use 3001 if 3000 is taken)
npm run build    # production build + type check
npm run lint     # ESLint
```

There are no tests. Always run `npm run build` to verify changes — it runs TypeScript checking and catches import errors.

## Stack & Key Constraints

- **Next.js 16.2.7** (App Router) — this is a newer version than training data; read `node_modules/next/dist/docs/` if unsure about an API
- **Tailwind CSS v4** — config is entirely in `app/globals.css` via `@theme inline {}`, not `tailwind.config.ts`
- **shadcn/ui v4 with `base-nova` style** — uses `@base-ui/react` instead of Radix UI. **`asChild` prop does NOT exist on `Button`.** Use `cn(buttonVariants({ size, variant }), extraClasses)` on `<Link>` elements instead
- **lucide-react v1.17** — `Github` and `Linkedin` icons do not exist in this version; use `GitFork`, `ExternalLink`, etc.
- **No `SheetTrigger` wrapping `Button`** — `SheetTrigger` renders as `<button>` itself; putting `<Button>` inside causes nested button hydration error. Put content directly in `<SheetTrigger className="...">`.

## Fonts

Two fonts loaded in `app/layout.tsx`:
- `Inter` → CSS var `--font-sans` → used globally via `font-sans` Tailwind utility
- `Geist Mono` → CSS var `--font-geist-mono` → `font-mono`

Font CSS vars are mapped in `app/globals.css` under `@theme inline`.

## Static Assets

Local images (logo, app screenshots) live in `app/logo/` and `app/planpm/` — import them as static modules:
```ts
import logo from "@/app/logo/kni_black_pl_png1024.png";
// use logo.src for the resolved URL string, or pass logo directly to next/image
```
External placeholder images use `picsum.photos` seed URLs with regular `<img>` tags (not `next/image`). Suppress the ESLint warning with `// eslint-disable-next-line @next/next/no-img-element`.

## Page Structure

Single-page app. `app/page.tsx` assembles all sections in order:
`Navbar → Hero → About → Projects → Team → Join → FAQ → Discord → Footer`

All content data (projects, team members, stats, FAQ questions) is hardcoded as const arrays inside each component file — there is no CMS or API.

## Client vs Server Components

Most components are server components. Components using `"use client"`:
- `Navbar.tsx` — scroll state, mobile sheet open state
- `PhotoCarousel.tsx` — IntersectionObserver + scroll refs
- `Projects.tsx` — filter state (Wszystkie / W toku / Zakończone)
- `FAQ.tsx` — accordion open state

## Discord Widget

Embedded iframe uses guild ID `1357420845970100335`. The server widget must be enabled in Discord Server Settings → Widget. Invite: `https://discord.gg/YwvmZadhMm`.

## Contact / Join Section

Membership contact: `o.desecki@pm.szczecin.pl` (Oskar Desecki). Teams deep-link: `https://teams.microsoft.com/l/chat/0/0?users=o.desecki@pm.szczecin.pl`.
