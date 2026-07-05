import Link from "next/link";

export default function HiddenAnchor({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/hackathon/kulisy"
      aria-label="???"
      className={`text-gray-200 dark:text-gray-900 hover:text-blue-500 transition-colors duration-500 ${className}`}
    >
      ⚓
    </Link>
  );
}
