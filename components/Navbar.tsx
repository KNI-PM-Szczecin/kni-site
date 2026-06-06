"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
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
const logo = "/logo/kni_black_pl_1024.png";

const NAV_LINKS = [
  { href: "#o-kole", label: "O kole" },
  { href: "#projekty", label: "Projekty" },
  { href: "#zespol", label: "Zespół" },
  { href: "#kontakt", label: "Kontakt" },
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
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-gray-100 dark:border-gray-800 shadow-sm" 
          : "bg-white dark:bg-gray-950 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Replacement: Stretched Text */}
        <Link href="/" className="flex items-center group">
          <div className="leading-none">
            <div className="text-xl sm:text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase transition-all group-hover:tracking-normal">
              KNI <span className="text-gray-400 dark:text-gray-600 font-medium ml-2 text-sm sm:text-base tracking-normal normal-case">Politechnika Morska</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/join"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full px-5")}
          >
            Dołącz do nas
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Otwórz menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Nawigacja</SheetTitle>
              <SheetDescription className="sr-only">
                Główne menu nawigacyjne
              </SheetDescription>
              <div className="flex items-center mb-10 mt-2">
                <div className="text-xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                  KNI <span className="text-gray-400 dark:text-gray-600 font-medium ml-1 text-xs tracking-normal normal-case">Politechnika Morska</span>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2.5 border-b border-gray-100 dark:border-gray-800 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/join"
                className={cn(buttonVariants(), "mt-8 w-full rounded-full")}
                onClick={() => setOpen(false)}
              >
                Dołącz do nas
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
