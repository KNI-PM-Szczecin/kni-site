import { ExternalLink, GitFork } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";

export default function News() {
  return (
    <section className="bg-blue-50 dark:bg-blue-950/30 border-b border-blue-100 dark:border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <FadeUp className="rounded-xl bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-900/60 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white flex-shrink-0 w-fit">
              Ogłoszenie
            </span>

            <a
              href="https://centrumnauki.eu/2-piknik-naukowy-morskiego-centrum-nauki/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm text-gray-700 dark:text-gray-300 leading-snug hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                II Piknik Naukowy Morskiego Centrum Nauki
              </span>{" "}
              — 13 września, 10:00–18:00.
              <ExternalLink className="w-3.5 h-3.5 inline-block ml-1 mb-0.5 text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <span className="hidden sm:inline text-blue-200 dark:text-blue-800">|</span>

            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm text-gray-700 dark:text-gray-300 leading-snug hover:text-gray-900 dark:hover:text-white transition-colors sm:ml-auto"
            >
              Zagraj na naszym stoisku w{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Shipyard Surfers
              </span>{" "}
              — grę stworzoną specjalnie na to wydarzenie.
              <GitFork className="w-3.5 h-3.5 inline-block ml-1 mb-0.5 text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
