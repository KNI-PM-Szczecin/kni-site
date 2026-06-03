import { getInitials, getAvatarColor } from "@/lib/avatar";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";
import karolImg from "@/app/members/KarolWronski.jpg";
import piotrImg from "@/app/members/PiotrWittig.jpg";
import aleksyImg from "@/app/members/AleksyChojnowski.jpg";

const TEAM = [
  { name: "Oskar Desecki", role: "Opiekun koła", photo: null },
  { name: "Karol Wroński", role: "Przewodniczący koła", photo: karolImg.src },
  { name: "Paweł Dutkiewicz", role: "Zastępca przewodniczącego", photo: null },
  { name: "Scarlet Dorozalska", role: "Zastępca przewodniczącego", photo: null },
  { name: "Piotr Wittig", role: "Sekretarz · Owner PlanPM", photo: piotrImg.src },
  { name: "Adrian Banaś", role: "Przewodniczący projektu VNS", photo: null },
  { name: "Aleksy Chojnowski", role: "Administrator Frytek", photo: aleksyImg.src },
] as const;

export default function Team() {
  return (
    <section id="zespol" className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Zespół
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ludzie za projektami.
          </h2>
          <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">
            Nasz zarząd i core team — studenci z pasją do technologii i chęcią do działania.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-300 transition-colors h-full">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 bg-gray-100 flex-shrink-0"
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
                <div className="text-sm font-semibold text-gray-900 leading-snug">{member.name}</div>
                <div className="text-xs text-gray-400 mt-1 leading-snug">{member.role}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
