"use client";

import type { ReactNode } from "react";
import { Reveal, useEntranceClass, usePageEntranceClass } from "@/components/skell-motion";

type AccentBarsProps = {
  className?: string;
};

export function AccentBars({ className = "" }: AccentBarsProps) {
  const barClass = useEntranceClass("skell-bar-animate");

  return (
    <>
      <div
        className={`skell-bar-drift absolute left-[38%] top-[18%] z-10 h-[42%] w-5 origin-top bg-skell-blue sm:w-6 ${barClass} ${className}`}
        aria-hidden
      />
      <div
        className={`skell-bar-drift absolute left-[52%] top-[10%] z-10 h-[58%] w-4 origin-top bg-skell-red sm:w-5 ${barClass} skell-delay-2 ${className}`}
        aria-hidden
      />
    </>
  );
}

export function AccentBarsSmall() {
  const barClass = usePageEntranceClass("skell-bar-animate");

  return (
    <div className="relative mb-6 h-16 w-full" aria-hidden>
      <div
        className={`skell-bar-drift absolute left-[20%] top-2 h-12 w-3 origin-top bg-skell-blue ${barClass}`}
      />
      <div
        className={`skell-bar-drift skell-delay-2 absolute left-[32%] top-0 h-16 w-2 origin-top bg-skell-red ${barClass}`}
      />
    </div>
  );
}

export function PageContent({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-14">
      {children}
    </Reveal>
  );
}

export function SectionHeading({
  children,
  as: Tag = "h2",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal delay={80}>
      <Tag className="mb-6 text-2xl text-skell-cream sm:text-3xl">{children}</Tag>
    </Reveal>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <Reveal delay={160} className="space-y-5 text-base leading-relaxed text-skell-cream/85 sm:text-lg">
      {children}
    </Reveal>
  );
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={delay}>
      {children}
    </Reveal>
  );
}
