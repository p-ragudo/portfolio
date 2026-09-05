import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "I'm currently writing and putting together content for this section. Check back soon!",
}: ComingSoonProps) {
  return (
    <main className="relative z-10 mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      {/* Heavy Bold Heading matching hero style */}
      <h1 className="text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-7xl">
        {title}
      </h1>

      {/* Subtext description */}
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed tracking-tight text-neutral-600">
        {description}
      </p>

      {/* Return to Home link */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}