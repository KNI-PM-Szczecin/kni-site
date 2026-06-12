"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PHOTOS = [
  { src: "/hero/team_work.webp", alt: "Zespół KNI przy pracy" },
  { src: "/hero/fl_studio.webp", alt: "Programowanie" },
  { src: "/hero/holo_lens.webp", alt: "Laboratorium robotyki" },
];

const STATS = [
  { value: "30+", label: "aktywnych członków" },
  { value: "2|7", label: "zrealizowanych projektów" },
  { value: "2", label: "lat działalności" },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center mb-20">

        {/* Left: staggered text entrance */}
        <div className="z-10 relative">
          <motion.p
            className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Koło Naukowe Informatyki · Politechnika Morska w Szczecinie
          </motion.p>

          <motion.h1
            className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.03] tracking-tight text-gray-900 dark:text-white mb-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            Budujemy przyszłość razem{" "}
            <span className="text-blue-600 dark:text-blue-400">z&nbsp;technologią.</span>
          </motion.h1>

          <motion.p
            className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            Jesteśmy społecznością studentów pasjonujących się informatyką —
            tworzymy projekty, prowadzimy badania i rozwijamy się razem.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          >
            <Link href="#kontakt" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-7 text-base")}>
              Dołącz do nas
            </Link>
            <Link href="#projekty" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
              Zobacz projekty →
            </Link>
          </motion.div>
        </div>

        {/* Right: photo collage — desktop */}
        <motion.div
          className="hidden lg:grid grid-cols-2 gap-4 h-[440px] lg:translate-x-8"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl">
            <Image
              src={PHOTOS[0].src}
              alt={PHOTOS[0].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image src={PHOTOS[1].src} alt={PHOTOS[1].alt} fill className="object-cover" sizes="(max-width: 1024px) 0px, 22vw" />
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image src={PHOTOS[2].src} alt={PHOTOS[2].alt} fill className="object-cover" sizes="(max-width: 1024px) 0px, 22vw" />
            </div>
          </div>
        </motion.div>

        {/* Mobile: single image */}
        <motion.div
          className="lg:hidden relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
        >
          <Image src={PHOTOS[0].src} alt={PHOTOS[0].alt} fill className="object-cover" priority sizes="(max-width: 640px) 100vw, 90vw" />
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-wrap items-center gap-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={cn("pr-10 sm:pr-16", i !== 0 && "pl-10 sm:pl-16 border-l border-gray-200 dark:border-gray-800")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 + i * 0.08, ease: EASE }}
          >
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-none">{stat.value}</div>
            <div className="text-sm text-gray-400 dark:text-gray-500 mt-1.5">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
