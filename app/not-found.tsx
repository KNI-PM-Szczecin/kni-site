import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
      <Image
        src="/logo/kni_black_pl_1024.png"
        alt="KNI"
        width={64}
        height={64}
        className="mb-8 dark:invert"
      />
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
        Błąd 404
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Strona nie istnieje.
      </h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed mb-10">
        Nie znaleźliśmy tego, czego szukasz. Wróć na stronę główną KNI.
      </p>
      <Link href="/" className={cn(buttonVariants(), "rounded-full px-7")}>
        Wróć na stronę główną
      </Link>
    </div>
  );
}
