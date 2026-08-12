"use client";

import Link from "next/link";
import { usePageEntranceClass } from "@/components/skell-motion";

export function ArchiveFooter() {
  const fadeClass = usePageEntranceClass("skell-fade skell-delay-3");

  return (
    <footer className={`border-t border-skell-gold/30 px-6 py-8 sm:px-10 sm:py-10 ${fadeClass}`}>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-base text-skell-cream/70 sm:text-lg">
            maintained as an archival record
          </p>
          <p className="mt-1 text-sm text-skell-cream/45">
            no new content is published here
          </p>
        </div>
        <Link
          href="/issues"
          className="skell-link text-sm text-skell-gold sm:text-base"
        >
          browse all 47 issues →
        </Link>
      </div>
    </footer>
  );
}
