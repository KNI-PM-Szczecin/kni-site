import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HACKATHONS } from "@/lib/hackathons";
import { FadeUp } from "@/components/ui/motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import HackathonGallery from "@/components/HackathonGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return HACKATHONS.map((hackathon) => ({
    slug: hackathon.slug,
  }));
}

export default async function HackathonDetailPage({ params }: Props) {
  const { slug } = await params;
  const hackathon = HACKATHONS.find((h) => h.slug === slug);

  if (!hackathon) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={hackathon.image}
            alt={hackathon.title}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: hackathon.imagePosition ?? "center" }}
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <Link 
                  href="/hackathon" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6 text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                  </svg>
                  Wróć do listy
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-400/30">
                    {hackathon.status}
                  </Badge>
                  <span className="text-gray-300 text-sm">{hackathon.date}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {hackathon.title}
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                  {hackathon.description}
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                
                {/* Detailed Description */}
                <FadeUp>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">O wydarzeniu</h2>
                  <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {hackathon.fullDescription}
                  </div>
                </FadeUp>

                {/* Posts Section */}
                {hackathon.posts.length > 0 && (
                  <div className="space-y-10">
                    <FadeUp>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Relacja i aktualności</h2>
                    </FadeUp>
                    <div className="space-y-12">
                      {hackathon.posts.map((post, idx) => (
                        <FadeUp key={post.id} delay={idx * 0.1}>
                          <article className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                            {post.image && (
                              <div className="relative aspect-[21/9] w-full">
                                <Image
                                  src={post.image}
                                  alt={post.title}
                                  fill
                                  sizes="(max-width: 1024px) 100vw, 66vw"
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="p-8">
                              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2 block">
                                {post.date}
                              </span>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {post.content}
                              </p>
                            </div>
                          </article>
                        </FadeUp>
                      ))}
                    </div>
                  </div>
                )}
                {/* Video Section */}
                {hackathon.video && (
                  <FadeUp>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{hackathon.video.title ?? "Nagranie z otwarcia"}</h2>
                    <div className="rounded-2xl overflow-hidden bg-black aspect-video mb-3">
                      <video
                        controls
                        preload="metadata"
                        className="w-full h-full"
                        aria-label={hackathon.video.caption}
                      >
                        <source src={hackathon.video.src} type="video/mp4" />
                        Twoja przeglądarka nie obsługuje odtwarzania wideo.
                      </video>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {hackathon.video.caption}
                    </p>
                  </FadeUp>
                )}

                {/* Gallery Section */}
                {hackathon.gallery && hackathon.gallery.length > 0 && (
                  <FadeUp>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Galeria zdjęć</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                      Kliknij zdjęcie, aby je powiększyć. Nawigacja strzałkami klawiatury.
                    </p>
                    <HackathonGallery photos={hackathon.gallery} />
                  </FadeUp>
                )}

              </div>

              {/* Sidebar */}
              <aside className="space-y-12">
                
                {/* Event Info Card */}
                <FadeUp delay={0.2}>
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informacje</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Lokalizacja</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{hackathon.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Data</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{hackathon.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* Milestones / Timeline */}
                <FadeUp delay={0.3}>
                  <div className="space-y-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white px-2">Kluczowe etapy</h3>
                    <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800">
                      {hackathon.milestones.map((milestone, idx) => (
                        <div key={idx} className="relative">
                          <div className={`absolute -left-[21px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-950 transition-colors ${
                            milestone.completed 
                            ? "border-blue-600 bg-blue-600" 
                            : "border-gray-300 dark:border-gray-700"
                          }`} />
                          <div className="space-y-1">
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                              {milestone.date}
                            </span>
                            <h4 className={`font-bold ${milestone.completed ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-600"}`}>
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

              </aside>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
