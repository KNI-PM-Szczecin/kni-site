import { FadeUp } from "@/components/ui/motion";
import AutoCarousel from "@/components/AutoCarousel";

const SLIDES = [
  { src: "/oblicza_it/1764787629964.webp", alt: "Oblicza IT" },
  { src: "/oblicza_it/1766778715302.webp", alt: "Oblicza IT" },
  { src: "/oblicza_it/1766778715755.webp", alt: "Oblicza IT" },
  { src: "/oblicza_it/1766778716024.webp", alt: "Oblicza IT" },
];

export default function Events() {
  return (
    <section id="eventy" className="bg-gray-50 dark:bg-gray-950 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Nasze eventy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
              Oblicza IT
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Cykl spotkań, na których zapraszamy ludzi z branży IT — developerów, architektów, founderów — żeby opowiedzieli, jak wygląda praca w ich firmach. Bez ściemy, za to z konkretami i pytaniami z sali.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Do tej pory przeprowadziliśmy{" "}
              <span className="font-semibold text-gray-900 dark:text-white">3 edycje</span>.
              Każda z inną firmą, inną perspektywą i inną historią o tym, czym tak naprawdę jest IT od środka.
            </p>
          </FadeUp>

          {/* Right: carousel */}
          <FadeUp delay={0.1}>
            <AutoCarousel slides={SLIDES} />
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
