"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { useEntranceClass } from "@/components/skell-motion";

type HomeHeroProps = {
  tagline: string;
  meta: string;
};

export function HomeHero({ tagline, meta }: HomeHeroProps) {
  const heroTextClass = useEntranceClass("skell-rise skell-delay-3");

  return (
    <section className="relative">
      <SiteHeader variant="overlay" />
      <div className="relative aspect-[1024/661] w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Brutalist architecture — sweeping concrete curves and structural shadows"
          fill
          className="skell-hero-image object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-skell-charcoal/90 via-skell-charcoal/50 to-transparent px-6 pb-6 pt-20 sm:px-10 sm:pb-8 sm:pt-24 ${heroTextClass}`}
        >
          <p className="max-w-xl text-lg leading-relaxed text-skell-cream sm:text-xl">
            {tagline}
          </p>
          <p className="mt-2 text-sm text-skell-cream/60 sm:text-base">{meta}</p>
        </div>
      </div>
    </section>
  );
}
