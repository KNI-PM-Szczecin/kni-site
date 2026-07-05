import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { GOOFY_MOMENTS } from "@/lib/goofyMoments";

export default function KulisyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-950 min-h-screen py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
            Jeździmy. <span className="text-red-600">Jest silnie...</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Znalazłeś kotwicę. Tu trzymamy to, co nie trafiło do oficjalnych relacji z wyjazdów.
          </p>

          <div className="space-y-20">
            {GOOFY_MOMENTS.map((moment) => (
              <section key={moment.event}>
                <h2 className="text-2xl font-bold text-white mb-6">{moment.event}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moment.photos.map((photo) => (
                    <div key={photo.src} className="rounded-2xl overflow-hidden bg-gray-900">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-base text-gray-300 italic leading-relaxed p-4">{photo.caption}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
