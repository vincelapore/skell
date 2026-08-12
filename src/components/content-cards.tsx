import Link from "next/link";
import type { Issue } from "@/lib/skell";
import { getIssueDisplay } from "@/lib/skell";
import { Reveal } from "@/components/skell-motion";

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <article className="skell-card group border border-skell-gold/25 bg-skell-charcoal/50 p-5 sm:p-6">
      <p className="text-xs text-skell-cream/50 sm:text-sm">
        {getIssueDisplay(issue)}
      </p>
      <h3 className="mt-2 text-xl text-skell-cream transition-colors duration-500 group-hover:text-skell-gold sm:text-2xl">
        {issue.title}
      </h3>
      {issue.subtitle && (
        <p className="mt-1 text-sm text-skell-gold sm:text-base">
          {issue.subtitle}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-skell-cream/70 sm:text-base">
        {issue.excerpt}
      </p>
    </article>
  );
}

export function IssueCardLink({
  issue,
  delay = 0,
}: {
  issue: Issue;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link href={`/issues/${issue.number}`} className="block">
        <IssueCard issue={issue} />
      </Link>
    </Reveal>
  );
}

export function TimelineEntry({
  event,
  delay = 0,
}: {
  event: { year: number; label: string; detail: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="relative grid gap-2 border-l-2 border-skell-gold/40 pl-5 sm:grid-cols-[5rem_1fr] sm:gap-6 sm:pl-6">
        <p className="text-lg text-skell-gold">{event.year}</p>
        <div>
          <p className="text-base text-skell-cream sm:text-lg">{event.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-skell-cream/65 sm:text-base">
            {event.detail}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function EditorCard({
  editor,
  delay = 0,
}: {
  editor: {
    name: string;
    born: number;
    role: string;
    bio: string;
    quote: string;
  };
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="skell-card border border-skell-gold/25 p-6 sm:p-8">
        <p className="text-sm text-skell-cream/50">b. {editor.born}</p>
        <h3 className="mt-1 text-2xl text-skell-cream sm:text-3xl">
          {editor.name}
        </h3>
        <p className="mt-1 text-sm text-skell-gold">{editor.role}</p>
        <p className="mt-5 text-base leading-relaxed text-skell-cream/80 sm:text-lg">
          {editor.bio}
        </p>
        <blockquote className="mt-6 border-l-2 border-skell-red/60 pl-4 text-base italic text-skell-cream/70 sm:text-lg">
          &ldquo;{editor.quote}&rdquo;
        </blockquote>
      </article>
    </Reveal>
  );
}
