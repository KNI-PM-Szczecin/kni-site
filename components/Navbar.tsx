"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        scrolled ? "border-b border-gray-100 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="KNI — Koło Naukowe Informatyki"
            width={36}
            height={36}
            className="flex-shrink-0"
            priority
          />
          <div className="leading-none">
            <div className="text-sm font-bold text-gray-900">KNI</div>
            <div className="text-xs text-gray-400 mt-0.5">Politechnika Morska</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#kontakt"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full px-5")}
          >
            Dołącz do nas
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Otwórz menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Nawigacja</SheetTitle>
            <SheetDescription className="sr-only">
              Główne menu nawigacyjne
            </SheetDescription>
            <div className="flex items-center gap-3 mb-10 mt-2">
              <Image
                src={logo}
                alt="KNI"
                width={32}
                height={32}
                className="flex-shrink-0"
              />
              <div className="text-sm font-bold text-gray-900">KNI</div>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-gray-900 py-2.5 border-b border-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#kontakt"
              className={cn(buttonVariants(), "mt-8 w-full rounded-full")}
              onClick={() => setOpen(false)}
            >
              Dołącz do nas
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
