"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const GOOFY_PHOTOS = [
  { src: "/hackathons/goofy_hackathon/full_send.jpg", caption: "Full send. Commitujemy prosto na main." },
  { src: "/hackathons/goofy_hackathon/hard_work.jpg", caption: "Prawdziwy MVP hackathonu Teamwork: Jeden śpi, drugi pracuje  ." },
  { src: "/hackathons/goofy_hackathon/npc_face.jpg", caption: "NPC face: „Czy te oczy mogą kłamać?”." },
  { src: "/hackathons/goofy_hackathon/pointer.jpg", caption: "Kurs wytyczony. Ląd (i finał) w zasięgu wzroku." },
  { src: "/hackathons/goofy_hackathon/stare_excercise.jpg", caption: "Precyzja jak przy pisaniu regexa o 3 w nocy." },
  { src: "/hackathons/goofy_hackathon/focus.jpg", caption: "Skupienie jak przy 3 minutowym o 4 nad ranem." },
  { src: "/hackathons/goofy_hackathon/laugh.jpg", caption: "Śmiech to zdrowie." },
  { src: "/hackathons/goofy_hackathon/food.jpg", caption: "Budżet na catering: nieograniczony. Wykorzystanie: również. " },
  { src: "/hackathons/goofy_hackathon/more_food.jpg", caption: "Darmo to uczciwa cena." },
  {src:  "/hackathons/goofy_hackathon/stalking.jpg", caption: "Karol i mistrzowie drugigo planu"},
  {src: "/hackathons/goofy_hackathon/proof.jpg", caption: "Dowód na to,że niektórzy przeżyją bunt Ai"},
  {src: "/hackathons/goofy_hackathon/spanko.jpg", caption: "Nie moge mam spanko x 3 ." },
];

export default function GoofyEasterEgg() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="???"
        className="text-gray-200 dark:text-gray-900 hover:text-blue-500 transition-colors duration-500 cursor-default select-none text-sm ml-1"
      >
        ⚓
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto p-4 sm:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            className="fixed top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-10"
            aria-label="Zamknij"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 mt-4">
              Jeździmy. <span className="text-red-600">Jest silnie...</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {GOOFY_PHOTOS.map((photo) => (
                <div key={photo.src} className="rounded-2xl overflow-hidden bg-gray-900">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-300 italic p-3">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
