import { Mail, MessageSquare } from "lucide-react";
import Image from "next/image";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const CONTACT_EMAIL = "o.desecki@pm.szczecin.pl";
const TEAMS_URL = `https://teams.microsoft.com/l/chat/0/0?users=${CONTACT_EMAIL}`;

const STEPS = [
  {
    number: "01",
    title: "Napisz do nas",
    description:
      "Skontaktuj się z Oskarem przez e-mail lub Teams — odpowiemy i opowiemy o tym, jak działamy.",
  },
  {
    number: "02",
    title: "Przyjdź na spotkanie",
    description:
      "Zapraszamy na jedno z naszych regularnych spotkań, żebyś mógł poznać zespół i zobaczyć projekty od środka.",
  },
  {
    number: "03",
    title: "Wypełnij formularz",
    description:
      "Uzupełnij swoje dane w formularzu zgłoszeniowym — to nasz oficjalny sposób na zarejestrowanie nowych członków.",
  },
];

export default function Join() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: steps */}
          <div>
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                Dołącz do nas
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Jak zostać członkiem koła?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
                Nie wymagamy żadnych formalności — wystarczy chęć do nauki i działania. Oto jak zacząć.
              </p>
            </FadeUp>

            <StaggerGrid className="flex flex-col gap-8" style={{ listStyle: "none" }}>
              {STEPS.map((step) => (
                <StaggerItem key={step.number} className="flex gap-5">
                  <span className="text-2xl font-bold text-gray-200 dark:text-gray-800 leading-none mt-0.5 tabular-nums w-8 flex-shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white mb-1">{step.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>

          {/* Right: contact card */}
          <FadeUp delay={0.15} className="flex items-start lg:pt-16">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 w-full">
              <div className="flex items-center gap-4 mb-7">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/members/oskar_desecki.webp"
                    alt="Oskar Desecki"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Oskar Desecki</div>
                  <div className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">Rekrutacja · KNI</div>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-7">
                Masz pytania? Napisz do Oskara — odpisuje zarówno na maila, jak i przez Teams.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-center gap-2.5 h-11 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Napisz e-mail
                </a>
                <a
                  href={TEAMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 h-11 rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Napisz na Teams
                </a>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500 text-center">
                {CONTACT_EMAIL}
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
