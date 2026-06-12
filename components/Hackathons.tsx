"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/motion";
import AutoCarousel from "@/components/AutoCarousel";

const SLIDES = [
  { src: "/hackathons/hackyeah/1759862212517.webp", alt: "Hackathon" },
  { src: "/hackathons/hackyeah/1759862213721.webp", alt: "Hackathon" },
  { src: "/hackathons/hackyeah/1759862217008.webp", alt: "Hackathon" },
  { src: "/hackathons/cybermil/1763587942958.webp", alt: "Hackathon" },
  { src: "/hackathons/hacknation2025/1765574231626.webp", alt: "Hackathon" },
  { src: "/hackathons/piter.webp", alt: "Hackathon - integracja", objectPosition: "top" },
];

export default function Hackathons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="hackathony" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: carousel */}
          <FadeUp>
            <AutoCarousel 
              slides={SLIDES} 
              onIndexChange={setCurrentIndex}
              className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5]" 
            />
          </FadeUp>

          {/* Right: text */}
          <FadeUp delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Hackathony
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
              {currentIndex === 5 ? (
                <>
                  Jeździmy. <span className="text-red-600">Jest silnie...</span>
                </>
              ) : (
                "Jeździmy. Jest fajnie."
              )}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Hackathony to jeden z naszych ulubionych sposobów na naukę i integrację — kilkanaście godzin kodowania, pomysłów i kawy razem z innymi pasjonatami z całej Polski.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Jeśli chcesz pojeździć razem z nami, dołącz do koła i bądź na bieżąco z naszymi planami na Discordzie.
            </p>
            <a
              href="/hackathon"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Zobacz wszystkie wyjazdy
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
