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
              KNI <span className="hidden sm:inline-block text-gray-300 dark:text-gray-700 font-medium ml-2 text-sm sm:text-lg tracking-normal normal-case">Politechnika Morska</span>
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
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/join"
              className={cn(buttonVariants({ size: "sm" }), "rounded-full px-6 font-bold")}
            >
              Dołącz
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold border border-gray-200 dark:border-gray-800">
              <Menu className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider hidden xs:inline">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetTitle className="sr-only">Nawigacja</SheetTitle>
              <SheetDescription className="sr-only">
                Główne menu nawigacyjne
              </SheetDescription>
              <div className="flex items-center mb-12 mt-4">
                <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                  KNI <span className="text-gray-400 dark:text-gray-600 font-medium ml-1 text-xs tracking-normal normal-case">Menu</span>
                </div>
              </div>
              <nav className="flex flex-col gap-4 items-center justify-center py-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-all hover:scale-110"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 sm:hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-500">Motyw</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/join"
                  className={cn(buttonVariants(), "w-full rounded-full h-12 font-bold")}
                  onClick={() => setOpen(false)}
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
