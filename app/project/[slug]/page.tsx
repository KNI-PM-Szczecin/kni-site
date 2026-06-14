import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DETAIL } from "@/lib/projects";
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
  return PROJECTS_DETAIL.map((p) => ({ slug: p.slug }));
}

const LINK_ICONS = {
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  video: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  external: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
};

const STATUS_COLORS: Record<string, string> = {
  "Produkcja": "bg-emerald-600/20 text-emerald-400 border-emerald-400/30",
  "W toku": "bg-blue-600/20 text-blue-400 border-blue-400/30",
  "Zakończony": "bg-gray-600/20 text-gray-400 border-gray-400/30",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DETAIL.find((p) => p.slug === slug);

  if (!project) notFound();

  const statusColor = STATUS_COLORS[project.status] ?? STATUS_COLORS["Zakończony"];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-950 min-h-screen">

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <Link
                  href="/#projekty"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6 text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Wróć do projektów
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className={statusColor}>
                    {project.status}
                  </Badge>
                  <span className="text-gray-300 text-sm font-medium">{project.category}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                {project.acronym && (
                  <p className="text-blue-400 text-sm sm:text-base font-mono tracking-wide mb-4">
                    {project.acronym}
                  </p>
                )}
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                  {project.description}
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">

              {/* Main */}
              <div className="lg:col-span-2 space-y-16">

                {/* About */}
                <FadeUp>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">O projekcie</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {project.fullDescription.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </FadeUp>

                {/* Challenge & Future */}
                {(project.challenge || project.future) && (
                  <FadeUp>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {project.challenge && (
                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <h3 className="font-bold text-gray-900 dark:text-white">Wyzwanie</h3>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.challenge}</p>
                        </div>
                      )}
                      {project.future && (
                        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-2xl p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="font-bold text-gray-900 dark:text-white">Co dalej?</h3>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.future}</p>
                        </div>
                      )}
                    </div>
                  </FadeUp>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <FadeUp>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Galeria</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                      Kliknij zdjęcie, aby je powiększyć. Nawigacja strzałkami klawiatury.
                    </p>
                    <HackathonGallery photos={project.gallery} />
                  </FadeUp>
                )}

              </div>

              {/* Sidebar */}
              <aside className="space-y-8">

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <FadeUp delay={0.15}>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Linki</h3>
                      <div className="space-y-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white text-sm font-medium"
                          >
                            <span className="text-gray-500 dark:text-gray-400">{LINK_ICONS[link.icon]}</span>
                            {link.label}
                            <svg className="w-3.5 h-3.5 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <FadeUp delay={0.2}>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Kluczowe cechy</h3>
                      <ul className="space-y-3">
                        {project.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>
                )}

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <FadeUp delay={0.3}>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tech stack</h3>
                      <div className="space-y-3">
                        {project.techStack.map((tech) => (
                          <div key={tech.name} className="flex items-start gap-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 whitespace-nowrap flex-shrink-0">
                              {tech.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-0.5">
                              {tech.role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                )}

              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
