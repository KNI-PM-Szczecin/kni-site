"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    label: "Hackathon 2024",
    src: "https://picsum.photos/seed/kni-hackathon/800/480",
  },
  {
    label: "Demo Day",
    src: "https://picsum.photos/seed/kni-demo/800/480",
  },
  {
    label: "Warsztaty ML",
    src: "https://picsum.photos/seed/kni-ml-workshop/800/480",
  },
  {
    label: "Konkurs IT",
    src: "https://picsum.photos/seed/kni-it-contest/800/480",
  },
  {
    label: "Konferencja",
    src: "https://picsum.photos/seed/kni-conference/800/480",
  },
];

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let bestIndex = active;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const i = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (i !== -1) bestIndex = i;
          }
        });
        if (maxRatio > 0) setActive(bestIndex);
      },
      { root: scroller, threshold: [0.3, 0.5, 0.7] }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = useCallback((i: number) => {
    const card = cardRefs.current[i];
    const scroller = scrollerRef.current;
    if (!card || !scroller) return;
    scroller.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActive(i);
  }, []);

  return (
    <div className="mt-10 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Scrollable strip */}
      <div
        ref={scrollerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="relative flex-none w-[82vw] sm:w-[calc(50%-6px)] lg:w-[calc(25%-9px)] aspect-[4/3] rounded-xl overflow-hidden bg-gray-100"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-medium">
              {slide.label}
            </span>
          </div>
        ))}
        {/* trailing spacer so last card isn't flush against edge */}
        <div className="flex-none w-4 lg:w-0" />
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center items-center gap-1.5 mt-5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Przejdź do zdjęcia ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? "w-5 bg-gray-900"
                : "w-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
