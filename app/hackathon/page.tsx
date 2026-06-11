"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HACKATHONS } from "@/lib/hackathons";
import { FadeUp } from "@/components/ui/motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const STATUS_VARIANTS = {
  nadchodzący: "default",
  "w toku": "secondary",
  zakończony: "outline",
} as const;

export default function HackathonPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                Nasze Wyjazdy
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Hackathony
              </h1>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
                Podróżujemy po całej Polsce, biorąc udział w maratonach programowania. 
                To tutaj szlifujemy umiejętności, budujemy innowacyjne projekty i integrujemy się z innymi pasjonatami.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HACKATHONS.map((hackathon, index) => (
              <FadeUp key={hackathon.slug} delay={index * 0.1}>
                <Link href={`/hackathon/${hackathon.slug}`} className="group block">
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={hackathon.image}
                        alt={hackathon.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant={STATUS_VARIANTS[hackathon.status]}>
                          {hackathon.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span>{hackathon.date}</span>
                        <span>•</span>
                        <span>{hackathon.location}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {hackathon.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 line-clamp-3">
                        {hackathon.description}
                      </p>
                      
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        Zobacz szczegóły
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
