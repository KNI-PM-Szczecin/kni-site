"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const FAQS = [
  {
    question: "Czy muszę mieć doświadczenie, żeby dołączyć?",
    answer: "Nie, absolutnie nie — liczą się chęci! Wszystkiego uczymy się na bieżąco. Zawsze możesz pytać starszych kolegów z koła, którzy chętnie pomogą.",
  },
  {
    question: "Ile czasu tygodniowo zajmuje udział w kole?",
    answer: "Różnie — decyzja należy do Ciebie. Zależy, w ile projektów chcesz się zaangażować i jak bardzo chcesz się rozwijać.",
  },
  {
    question: "Czy mogę dołączyć na dowolnym roku studiów?",
    answer: "Tak, na dowolnym — nawet na magisterce. Nie ma żadnych ograniczeń rocznikowych.",
  },
  {
    question: "Czy można zrezygnować z koła?",
    answer: "Tak, można — nic nie jest przymusowe.",
  },
  {
    question: "Jak dołączyć do koła?",
    answer: "Zescrolluj niżej — znajdziesz tam formularz kontaktowy i wszystkie potrzebne informacje.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-gray-900 dark:text-white">{question}</span>
        <motion.span
          className="flex-shrink-0 text-gray-400 dark:text-gray-500"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20">

          {/* Left */}
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Masz pytania?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
              Odpowiadamy na najczęściej zadawane pytania dotyczące koła.
            </p>
          </FadeUp>

          {/* Right: accordion */}
          <StaggerGrid>
            {FAQS.map((faq) => (
              <StaggerItem key={faq.question}>
                <FAQItem {...faq} />
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </div>
    </section>
  );
}
