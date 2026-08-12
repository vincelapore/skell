import Image from "next/image";
import type { Cover } from "@/lib/skell";

export function IssueCover({ cover }: { cover: Cover }) {
  return (
    <figure className="mx-auto mb-10 max-w-xs">
      <div className="relative aspect-[2/3] overflow-hidden bg-skell-charcoal">
        <Image
          src={cover.image}
          alt={`Skell issue ${cover.issueNumber} cover`}
          fill
          className="object-cover object-center"
          sizes="320px"
          priority
        />
      </div>
      {cover.note && (
        <figcaption className="mt-3 text-center text-xs text-skell-cream/50 sm:text-sm">
          {cover.note}
        </figcaption>
      )}
    </figure>
  );
}
