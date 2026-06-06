import { getInitials, getAvatarColor } from "@/lib/avatar";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.033.05a19.928 19.928 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

const TEAM = [
  { name: "Oskar Desecki", role: "Opiekun koła", discord: "drakula7627", photo: "/members/oskar_desecki.png" },
  { 
    name: "Bartosz Muczyński", 
    role: "VIP · Konsultant merytoryczny", 
    discord: "muczak", 
    photo: "/members/bartosz_muczynski.png",
    position: "center 20%" 
  },
  { name: "Karol Wroński", role: "Przewodniczący koła", discord: "kaj0x", photo: "/members/karol_wronski.jpg" },
  { name: "Paweł Dutkiewicz", role: "Zastępca przewodniczącego", discord: "_dudeq_", photo: "/members/pawel_dutkiewicz.png" },
  { name: "Scarlet Dorożalska", role: "Zastępca przewodniczącego", discord: "scarletsun", photo: "/members/scarlet_dorozalska.jpg" },
  { name: "Piotr Wittig", role: "Sekretarz · Owner PlanPM", discord: "schoji", photo: "/members/piotr_wittig.png" },
  { name: "Adrian Banaś", role: "Przewodniczący projektu VNS", discord: "adisman", photo: "/members/adrian_banas.png" },
  { name: "Aleksy Chojnowski", role: "Członek honorowy · Multitool Creative & Admin", discord: "zekqkeku", photo: "/members/kot.png" },
] as const;

export default function Team() {
  return (
    <section id="zespol" className="bg-gray-50 dark:bg-gray-950 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            Zespół
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Ludzie za projektami.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-12 leading-relaxed">
            Nasz zarząd i core team — studenci z pasją do technologii i chęcią do działania.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors h-full">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 bg-gray-100 dark:bg-gray-800 flex-shrink-0"
                    style={{ objectPosition: (member as any).position || "center" }}
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ backgroundColor: getAvatarColor(member.name) }}
                  >
                    <span className="text-white text-lg font-semibold leading-none select-none">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
                <div className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{member.name}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 leading-snug">{member.role}</div>
                <div className="flex items-center gap-1 mt-2">
                  <DiscordIcon className="w-3 h-3 text-indigo-400 dark:text-indigo-300 flex-shrink-0" />
                  <span className="text-xs text-indigo-400 dark:text-indigo-300 font-mono">{member.discord}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
