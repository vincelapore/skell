"use client";

import Link from "next/link";
import { useReveal } from "@/components/skell-motion";

export function IssueIndexCell({
  num,
  documented,
  delay = 0,
}: {
  num: number;
  documented: boolean;
  delay?: number;
}) {
  const { ref, className, style } = useReveal(delay);

  return (
    <li ref={ref as never} className={className} style={style}>
      {documented ? (
        <Link
          href={`/issues/${num}`}
          className="skell-card block border border-skell-gold/30 px-2 py-3 text-center text-sm text-skell-cream"
        >
          {num}
        </Link>
      ) : (
        <span className="block border border-skell-gold/10 px-2 py-3 text-center text-sm text-skell-cream/30">
          {num}
        </span>
      )}
    </li>
  );
}
