import Image from "next/image";
import { GitFork, ExternalLink, Mail } from "lucide-react";
const logo = "/logo/kni_black_pl_1024.png";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left: logo + text */}
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="KNI — Koło Naukowe Informatyki"
            width={64}
            height={64}
            className="flex-shrink-0 dark:invert"
          />
          <div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">
              KNI — Koło Naukowe Informatyki
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              Politechnika Morska w Szczecinie
            </div>
            <div className="text-[10px] text-gray-400 dark:text-gray-600 mt-2">
              © 2025 Wszystkie prawa zastrzeżone
            </div>
          </div>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/KNI-PM-Szczecin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <GitFork className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/company/ko%C5%82o-naukowe-informatyki-pm/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576733522142&locale=pl_PL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Facebook
          </a>
          <a
            href="mailto:kni@pm.szczecin.pl"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
