"use client";

import { useState } from "react";

export function ArchivalNotice() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  function dismiss() {
    setIsClosing(true);
    window.setTimeout(() => setIsOpen(false), 600);
  }

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 ${
        isClosing ? "skell-fade opacity-0 transition-opacity duration-500" : "skell-modal-backdrop bg-skell-charcoal/60 backdrop-blur-sm"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="archival-notice-title"
    >
      <div
        className={`relative max-w-lg border-[12px] border-skell-gold bg-skell-charcoal p-8 shadow-2xl sm:p-10 ${
          isClosing ? "opacity-0 translate-y-4 transition-all duration-500" : "skell-modal-panel"
        }`}
      >
        <div
          className="skell-bar-animate skell-bar-drift absolute -left-3 top-16 h-32 w-4 bg-skell-blue"
          aria-hidden
        />
        <div
          className="skell-bar-animate skell-bar-drift skell-delay-2 absolute -right-3 top-8 h-48 w-3 bg-skell-red"
          aria-hidden
        />

        <p
          id="archival-notice-title"
          className="skell-rise text-lg leading-relaxed text-skell-cream sm:text-xl"
        >
          Skell ceased publication in 1983.
        </p>
        <p className="skell-rise skell-delay-2 mt-4 text-base leading-relaxed text-skell-cream/85 sm:text-lg">
          This site is an archival record of its 47 issues, maintained as a
          resource for researchers and readers with an interest in Scandinavian
          architectural criticism of the 1970s. No new content is published
          here. The views expressed belong to Britta Söderström and Lars Fenvik,
          and to the era in which they wrote.
        </p>

        <button
          type="button"
          onClick={dismiss}
          className="skell-rise skell-delay-4 mt-8 border border-skell-gold px-6 py-2 text-sm tracking-wide text-skell-gold transition-colors duration-500 hover:bg-skell-gold hover:text-skell-charcoal sm:text-base"
        >
          enter the archive
        </button>
      </div>
    </div>
  );
}
