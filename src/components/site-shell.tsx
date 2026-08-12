"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import {
  AmbientBars,
  useEntranceClass,
} from "@/components/skell-motion";
import { SkellMotionProvider } from "@/components/skell-motion-context";
import { usePathname } from "next/navigation";

function SiteFrameInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const frameClass = useEntranceClass("skell-frame-in");

  return (
    <div className="min-h-full p-4 sm:p-6 md:p-8">
      <div
        className={`relative mx-auto min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-[2rem] border-[14px] border-skell-gold-dark bg-skell-charcoal sm:min-h-[calc(100vh-3rem)] sm:rounded-[2.5rem] sm:border-[18px] md:min-h-[calc(100vh-4rem)] md:rounded-[3rem] md:border-[22px] ${frameClass}`}
      >
        <AmbientBars />
        {!isHome && <SiteHeader variant="solid" />}
        {children}
      </div>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SkellMotionProvider>
      <SiteFrameInner>{children}</SiteFrameInner>
    </SkellMotionProvider>
  );
}
