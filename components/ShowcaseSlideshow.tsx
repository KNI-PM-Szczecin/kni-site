"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Slide {
  src: string;
  objectPosition?: string;
}

const INTERVAL = 6000;

export default function ShowcaseSlideshow({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].src}
            alt=""
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: INTERVAL / 1000 + 1.2, ease: "linear" }}
            className="w-full h-full object-cover"
            style={{ objectPosition: slides[current].objectPosition ?? "center" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradients for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/50 pointer-events-none" />
    </div>
  );
}
