import { FadeUp } from "@/components/ui/motion";
import Link from "next/link";

export default function SignupCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Zapisz się
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Gotowy, żeby dołączyć?
          </h2>
          <p className="text-gray-400 dark:text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
            Wypełnij formularz zgłoszeniowy — skontaktujemy się z Tobą i opowiemy
            o najbliższych spotkaniach.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-white text-gray-900 dark:text-gray-900 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
          >
            Wypełnij formularz
            <span aria-hidden>→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
