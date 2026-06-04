"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/ui/motion";
const planpmImg = { src: "/projects/plan_pm.png" };
const airdronImg = { src: "/projects/airdrone_pm.png" };
const rpsImg = { src: "/projects/rock_paper_scissors.png" };
const fryderykImg = { src: "/projects/fryderyk.png" };
const vnsImg = { src: "/projects/vns.png" };
const navigatorImg = { src: "/projects/navigator_pm.png" };

const PROJECTS = [
  {
    category: "Mobile Dev",
    status: "Produkcja" as const,
    title: "PlanPM",
    description:
      "Mobilna aplikacja offline-first dla społeczności Politechniki Morskiej — spersonalizowany plan zajęć dla studentów i wykładowców. Dostępna na App Store i Google Play.",
    members: 6,
    image: planpmImg.src,
    github: "https://github.com/KNI-PM-Szczecin/plan_pm",
  },
  {
    category: "Game Dev",
    status: "W toku" as const,
    title: "VNS",
    description:
      "Post-apokaliptyczny Extraction Shooter połączony z Visual Novel. Dzień — wychodzisz na pustkowia, scavenging i walka z mutantami. Noc — baza w opuszczonym hangarze, relacje z NPC, kontrakty i losowe eventy. FPP, styl komiksowy, silnik Unity.",
    members: 0,
    image: vnsImg.src,
  },
  {
    category: "Hardware",
    status: "W toku" as const,
    title: "Air Drone PM",
    description:
      "Budowa drona FPV od podstaw — dobór ramy, druk 3D komponentów, konfiguracja firmware Betaflight/iNav, kalibracja sensorów i tuning PID. Projekt sprzętowy prowadzony w organizacji KNI na GitHubie.",
    members: 0,
    image: airdronImg.src,
    github: "https://github.com/KNI-PM-Szczecin/airdrone_pm",
  },
  {
    category: "Mobile Dev",
    status: "W toku" as const,
    title: "NavigatorPM",
    description:
      "Skanujesz kod QR przy sali w budynku uczelni — aplikacja tworzy ścieżkę na wirtualnej mapie i prowadzi Cię do wybranego pomieszczenia.",
    members: 0,
    image: navigatorImg.src,
    github: "https://github.com/KNI-PM-Szczecin/NavigatorPM",
  },
  {
    category: "Discord Bot",
    status: "W toku" as const,
    title: "Fryderyk",
    description:
      "Bot Discordowy monitorujący serwer KNI — loguje wiadomości, aktywność głosową i zdarzenia do bazy PostgreSQL. Umożliwia backfill całej historii i filtrowanie ruchu bot vs. człowiek.",
    members: 0,
    image: fryderykImg.src,
    github: "https://github.com/KNI-PM-Szczecin/Fryderyk",
  },
  {
    category: "Computer Vision",
    status: "Zakończony" as const,
    title: "Kamień Papier Nożyce",
    description:
      "Aplikacja webowa do gry w kamień–papier–nożyce z wykrywaniem gestów dłoni w czasie rzeczywistym (MediaPipe + Flask). Przygotowana na Marinaria 2026.",
    members: 0,
    image: rpsImg.src,
    github: "https://github.com/KNI-PM-Szczecin/rock-paper-scissors",
  },
];

type Filter = "Wszystkie" | "W toku" | "Zakończone";
const FILTERS: Filter[] = ["Wszystkie", "W toku", "Zakończone"];

const STATUS_STYLES: Record<string, string> = {
  "Produkcja": "text-emerald-600",
  "W toku": "text-blue-600",
  "Zakończony": "text-gray-400",
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("Wszystkie");

  const visible = PROJECTS.filter((p) => {
    if (filter === "W toku") return p.status === "W toku" || p.status === "Produkcja";
    if (filter === "Zakończone") return p.status === "Zakończony";
    return true;
  });

  return (
    <section id="projekty" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Nasze projekty
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Co budujemy?
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Realizujemy projekty badawcze i inżynierskie z obszarów AI,
              bezpieczeństwa, web dev i robotyki.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:border-gray-300 transition-colors h-full"
            >
              {/* Image */}
              <div className="aspect-[16/9] bg-gray-50 overflow-hidden flex-shrink-0">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gray-300">
                    Brak zdjęcia
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category + Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-medium ${STATUS_STYLES[project.status] ?? "text-gray-400"}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">
                    {project.members > 0 ? `${project.members} członków` : ""}
                  </span>
                  <a
                    href={"github" in project ? project.github : "#"}
                    target={"github" in project ? "_blank" : undefined}
                    rel={"github" in project ? "noopener noreferrer" : undefined}
                    className="text-xs font-medium text-gray-900 hover:text-blue-600 transition-colors inline-flex items-center gap-0.5"
                  >
                    Dowiedz się więcej →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
