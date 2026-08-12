"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/skell-motion";
import type { Cover } from "@/lib/skell";
import { getIssueByNumber } from "@/lib/skell";

function CoverCard({ cover, delay = 0 }: { cover: Cover; delay?: number }) {
  const issue = getIssueByNumber(cover.issueNumber);
  const label = issue?.title ?? `issue no. ${cover.issueNumber}`;

  const image = (
    <div className="skell-card relative aspect-[2/3] overflow-hidden bg-skell-charcoal">
      <Image
        src={cover.image}
        alt={`Skell issue ${cover.issueNumber} cover — ${label}`}
        fill
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
      />
    </div>
  );

  return (
    <Reveal delay={delay}>
      <figure className="group">
        {issue ? (
          <Link href={`/issues/${cover.issueNumber}`} className="block">
            {image}
          </Link>
        ) : (
          image
        )}
        <figcaption className="mt-3">
          <p className="text-sm text-skell-cream sm:text-base">
            no. {cover.issueNumber}
            {issue && (
              <span className="text-skell-cream/60"> · {issue.title}</span>
            )}
          </p>
          {cover.note && (
            <p className="mt-1 text-xs text-skell-cream/45 sm:text-sm">
              {cover.note}
            </p>
          )}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function CoverGallery({ covers }: { covers: Cover[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {covers.map((cover, index) => (
        <CoverCard key={cover.issueNumber} cover={cover} delay={index * 100} />
      ))}
    </div>
  );
}
