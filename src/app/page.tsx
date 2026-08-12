import Link from "next/link";
import {
  EditorCard,
  IssueCardLink,
  TimelineEntry,
} from "@/components/content-cards";
import { CoverGallery } from "@/components/cover-gallery";
import { HomeHero } from "@/components/home-hero";
import { AnimatedSection } from "@/components/page-elements";
import { ArchiveFooter } from "@/components/site-frame";
import {
  covers,
  editors,
  getFeaturedIssues,
  magazine,
  timeline,
} from "@/lib/skell";

export default function Home() {
  const featuredIssues = getFeaturedIssues();

  return (
    <>
      <HomeHero
        tagline={magazine.tagline}
        meta={`${magazine.issueCount} issues · ${magazine.city}, ${magazine.country}`}
      />

      <AnimatedSection className="border-t border-skell-gold/20 px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl text-skell-cream sm:text-3xl">what was skell</h2>
          <p className="mt-6 text-base leading-relaxed text-skell-cream/85 sm:text-lg">
            {magazine.description}
          </p>
          <p className="mt-5 text-base leading-relaxed text-skell-cream/85 sm:text-lg">
            {magazine.origin}
          </p>
          <Link
            href="/about"
            className="skell-link mt-8 inline-block text-sm text-skell-gold sm:text-base"
          >
            read the full history →
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-t border-skell-gold/20 bg-skell-charcoal/40 px-6 py-12 sm:px-10 sm:py-16"
        delay={80}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl text-skell-cream sm:text-3xl">from the archive</h2>
            <Link href="/issues" className="skell-link text-sm text-skell-gold">
              all {magazine.issueCount} issues →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredIssues.map((issue, index) => (
              <IssueCardLink
                key={issue.number}
                issue={issue}
                delay={index * 120}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-t border-skell-gold/20 px-6 py-12 sm:px-10 sm:py-16"
        delay={100}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl text-skell-cream sm:text-3xl">
                cover archive
              </h2>
              <p className="mt-2 max-w-lg text-sm text-skell-cream/60 sm:text-base">
                Skell&apos;s covers were designed in-house until 1976, then by
                Göteborg studio E. Each issue carried a single building study
                photograph and no masthead on the front.
              </p>
            </div>
            <Link href="/issues" className="skell-link text-sm text-skell-gold">
              issue index →
            </Link>
          </div>
          <CoverGallery covers={covers} />
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-t border-skell-gold/20 px-6 py-12 sm:px-10 sm:py-16"
        delay={120}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl text-skell-cream sm:text-3xl">editors</h2>
            <Link href="/editors" className="skell-link text-sm text-skell-gold">
              full biographies →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {editors.map((editor, index) => (
              <EditorCard key={editor.name} editor={editor} delay={index * 150} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-t border-skell-gold/20 bg-skell-charcoal/40 px-6 py-12 sm:px-10 sm:py-16"
        delay={160}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl text-skell-cream sm:text-3xl">
            a brief chronology
          </h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <TimelineEntry
                key={event.year}
                event={event}
                delay={index * 80}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="border-t border-skell-gold/20 px-6 py-12 sm:px-10 sm:py-16"
        delay={200}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-skell-cream/50">from issue no. 1</p>
          <blockquote className="mt-4 text-xl leading-relaxed text-skell-cream sm:text-2xl">
            &ldquo;We begin Skell because Scandinavian architecture has
            excellent technicians and insufficient critics.&rdquo;
          </blockquote>
          <Link
            href="/manifesto"
            className="skell-link mt-8 inline-block text-sm text-skell-gold sm:text-base"
          >
            read the founding manifesto →
          </Link>
        </div>
      </AnimatedSection>

      <ArchiveFooter />
    </>
  );
}
