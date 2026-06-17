"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#o-kole", label: "O kole" },
  { href: "/#projekty", label: "Projekty" },
  { href: "/#eventy", label: "Eventy" },
  { href: "/#hackathony", label: "Hackathony" },
  { href: "/#zespol", label: "Zespół" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-gray-100 dark:border-gray-800 shadow-sm" 
          : "bg-white dark:bg-gray-950 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Replacement: Stretched Text */}
        <Link href="/" className="flex items-center group">
          <div className="leading-none">
            <div className="text-xl sm:text-3xl font-black tracking-tighter text-gray-900 dark:text-white uppercase transition-all group-hover:tracking-normal">
              KNI <span className="hidden sm:inline-block text-gray-400 dark:text-gray-600 font-medium ml-2 text-xs sm:text-sm tracking-normal normal-case">Politechnika Morska</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop: theme toggle + join button (shown when nav links are visible) */}
          <div className="hidden xl:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/join"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 font-bold")}
            >
              Dołącz
            </Link>
          </div>

          {/* Mobile/tablet: hamburger (hidden when full nav is visible) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="xl:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold border border-gray-200 dark:border-gray-800 cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider hidden xs:inline">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 flex flex-col gap-0 p-6">
              <SheetTitle className="sr-only">Nawigacja</SheetTitle>
              <SheetDescription className="sr-only">Główne menu nawigacyjne</SheetDescription>

              {/* Header */}
              <div className="flex items-center pb-5 pr-10 border-b border-gray-100 dark:border-gray-800">
                <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                  KNI
                </span>
                <span className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500 tracking-normal normal-case">
                  Menu
                </span>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-1 mt-4">
                {NAV_LINKS.map((link, i) =>
                  i === 0 ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl px-6 py-5 text-2xl font-bold transition-opacity hover:opacity-80"
                    >
                      {link.label}
                      <ArrowRight className="h-6 w-6 shrink-0" />
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center text-2xl font-bold text-gray-900 dark:text-white py-5 px-2 transition-opacity hover:opacity-60"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Footer */}
              <div className="border-t border-gray-100 dark:border-gray-800 pt-5 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400 dark:text-gray-500">Motyw</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "w-full rounded-full h-14 text-base font-bold")}
                >
                  Dołącz do KNI
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
