"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { useEntranceClass } from "@/components/skell-motion";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const isOverlay = variant === "overlay";
  const brandClass = useEntranceClass("skell-brand");

  return (
    <header
      className={
        isOverlay
          ? "absolute inset-x-0 top-0 z-20 px-6 py-6 sm:px-10 sm:py-8"
          : "border-b border-skell-gold/20 px-6 py-6 sm:px-10 sm:py-8"
      }
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <Link href="/" className={`group ${brandClass}`}>
          <h1 className="text-3xl tracking-wide text-skell-cream transition-colors duration-500 group-hover:text-skell-gold sm:text-4xl">
            skell
          </h1>
          <p className="mt-1 text-xs text-skell-cream/60 sm:text-sm">
            est. 1971 · ceased 1983
          </p>
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
