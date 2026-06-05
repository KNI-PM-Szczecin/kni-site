import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/motion";

export default function RegulaminPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Krótki Regulamin Członkostwa KNI
            </h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-400">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Postanowienia ogólne</h2>
                <p>
                  Członkostwo w Kole Naukowym Informatyków (KNI) jest dobrowolne i otwarte dla wszystkich studentów zainteresowanych rozwojem w obszarze informatyki.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Aktywne uczestnictwo</h2>
                <p>
                  Od członków koła wymaga się aktywnego udziału w działalności KNI. Aktywność definiowana jest poprzez:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Udział w regularnych spotkaniach koła.</li>
                  <li>Realizację lub współudział w projektach prowadzonych przez koło.</li>
                  <li>Pomoc w organizacji wydarzeń, warsztatów i hackathonów.</li>
                  <li>Współdzielenie wiedzy z innymi członkami koła.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Skreślenie z listy członków</h2>
                <p>
                  Członek koła może zostać skreślony z listy członków w przypadku:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Złożenia rezygnacji.</li>
                  <li>Utraty statusu studenta.</li>
                  <li className="font-medium text-gray-900 dark:text-white">
                    Braku aktywnego udziału w działalności koła przez okres jednego semestru bez uzasadnionej przyczyny.
                  </li>
                </ul>
                <p className="mt-4 italic">
                  Decyzję o skreśleniu z listy członków podejmuje Zarząd Koła po uprzednim upomnieniu członka.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Prawa członka</h2>
                <p>
                  Członkowie KNI mają prawo do korzystania z zasobów koła, udziału w szkoleniach oraz reprezentowania koła na zewnątrz.
                </p>
              </section>
            </div>
          </FadeUp>
        </div>
      </main>
      <Footer />
    </>
  );
}
