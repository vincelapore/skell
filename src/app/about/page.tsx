import type { Metadata } from "next";
import { TimelineEntry } from "@/components/content-cards";
import {
  AccentBarsSmall,
  PageContent,
  Prose,
  SectionHeading,
} from "@/components/page-elements";
import { ArchiveFooter } from "@/components/site-frame";
import { magazine, timeline } from "@/lib/skell";

export const metadata: Metadata = {
  title: "about — skell",
  description:
    "The history of Skell, the Scandinavian architecture magazine published in Göteborg from 1971 to 1983.",
};

export default function AboutPage() {
  return (
    <>
      <PageContent>
        <AccentBarsSmall />
        <SectionHeading as="h1">about skell</SectionHeading>

        <Prose>
          <p>{magazine.description}</p>
          <p>{magazine.origin}</p>
          <p>
            The magazine operated from a converted sail loft at Haga Nygata 12
            in Göteborg&apos;s Haga district — a neighbourhood of wooden
            houses and steep cobblestones that Söderström considered
            &ldquo;the only honest urbanism Sweden ever produced.&rdquo; The
            loft had previously stored rigging for herring boats. Fenvik
            installed a second-hand Heidelberg press in the corner and refused
            to remove the salt-stained ceiling beams.
          </p>
          <p>
            Skell published {magazine.frequency}, in {magazine.language}. Each
            issue ran to roughly sixty pages: two long essays, one building
            study, correspondence, and occasionally a reader-submitted
            photograph. Print runs averaged {magazine.printRun}. The magazine
            never accepted advertising from developers, though it did once print
            a full-page notice from a timber cooperative in Västerbotten that
            Fenvik later described as &ldquo;the closest we came to
            compromise.&rdquo;
          </p>
          <p>
            Subscribers included municipal architects in Oslo and Copenhagen,
            two professors at Aalto University, a parish council in Luleå, and
            — according to a 1979 internal note — &ldquo;one person in
            Reykjavík whose identity we have not established.&rdquo;
          </p>
          <p>
            Skell ceased publication in {magazine.ceased} without public
            announcement. The final issue carried no notice of closure. When
            subscribers wrote to ask whether a spring number was forthcoming,
            they received a blank card bearing a single line in Fenvik&apos;s
            hand: <em>vi har inget mer att säga</em> — we have nothing more to
            say.
          </p>
        </Prose>

        <SectionHeading>chronology</SectionHeading>
        <div className="space-y-8">
          {timeline.map((event, index) => (
            <TimelineEntry key={event.year} event={event} delay={index * 80} />
          ))}
        </div>
      </PageContent>
      <ArchiveFooter />
    </>
  );
}
