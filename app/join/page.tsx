import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FadeUp } from "@/components/ui/motion";

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                Rekrutacja
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Dołącz do KNI
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Wypełnij poniższy formularz, aby zgłosić chęć dołączenia do Koła Naukowego Informatyków. 
                Skontaktujemy się z Tobą w celu ustalenia szczegółów.
              </p>
            </FadeUp>
          </div>
          
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
