import { FadeUp } from "@/components/ui/motion";
import AutoCarousel from "@/components/AutoCarousel";

const SLIDES = [
  { src: "/hackathons/1759862212517.jpg", alt: "Hackathon" },
  { src: "/hackathons/1759862213721.jpg", alt: "Hackathon" },
  { src: "/hackathons/1759862217008.jpg", alt: "Hackathon" },
  { src: "/hackathons/1763587942958.jpg", alt: "Hackathon" },
  { src: "/hackathons/1765574231626.jpg", alt: "Hackathon" },
  { src: "/hackathons/piter.png", alt: "Hackathon - integracja" },
];

export default function Hackathons() {
  return (
    <section id="hackathony" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: carousel */}
          <FadeUp>
            <AutoCarousel slides={SLIDES} />
          </FadeUp>

          {/* Right: text */}
          <FadeUp delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Hackathony
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
              Jeździmy. Jest fajnie.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Hackathony to jeden z naszych ulubionych sposobów na naukę i integrację — kilkanaście godzin kodowania, pomysłów i kawy razem z innymi pasjonatami z całej Polski.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Jeśli chcesz pojeździć razem z nami, dołącz do koła i bądź na bieżąco z naszymi planami na Discordzie.
            </p>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
