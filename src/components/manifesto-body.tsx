"use client";

import { Reveal } from "@/components/skell-motion";

export function ManifestoBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, index) => (
        <Reveal key={paragraph.slice(0, 40)} delay={index * 120}>
          <p className="text-base leading-relaxed text-skell-cream/85 sm:text-lg">
            {paragraph}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
