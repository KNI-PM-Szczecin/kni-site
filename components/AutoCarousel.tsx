"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Slide {
  src: string;
  alt?: string;
}

const INTERVAL = 5000;

export default function AutoCarousel({
  slides,
  className = "",
  onIndexChange,
}: {
  slides: Slide[];
  className?: string;
  onIndexChange?: (index: number) => void;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      const next = (current + 1) % slides.length;
      setCurrent(next);
      onIndexChange?.(next);
    }, INTERVAL);
    return () => clearInterval(t);
  }, [slides.length, current, onIndexChange]);

  const handleManualChange = (index: number) => {
    setCurrent(index);
    onIndexChange?.(index);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl aspect-video bg-gray-100 dark:bg-gray-800 ${className}`}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Ken Burns zoom */}
          <motion.img
            src={slides[current].src}
            alt={slides[current].alt ?? ""}
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: INTERVAL / 1000 + 1, ease: "linear" }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManualChange(i)}
            aria-label={`Zdjęcie ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto ${
              i === current
                ? "w-5 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
