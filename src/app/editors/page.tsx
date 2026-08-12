import type { Metadata } from "next";
import { EditorCard } from "@/components/content-cards";
import {
  AccentBarsSmall,
  PageContent,
  Prose,
  SectionHeading,
} from "@/components/page-elements";
import { ArchiveFooter } from "@/components/site-frame";
import { editors } from "@/lib/skell";

export const metadata: Metadata = {
  title: "editors — skell",
  description:
    "Britta Söderström and Lars Fenvik, founding editors of Skell.",
};

export default function EditorsPage() {
  return (
    <>
      <PageContent>
        <AccentBarsSmall />
        <SectionHeading as="h1">the editors</SectionHeading>

        <Prose>
          <p>
            Skell was edited throughout its twelve-year run by the same two
            people. No guest editors were appointed. No editorial board was
            formed. Söderström and Fenvik divided the work by temperament
            rather than subject: she wrote about housing, schools, and the
            welfare state&apos;s spatial logic; he wrote about cemeteries,
            harbours, churchyards, and the politics of public space.
          </p>
          <p>
            They disagreed frequently and in print. Issue 28 contains a
            footnote in which Söderström calls Fenvik&apos;s position on
            pedestrianisation &ldquo;romantic and insufficiently materialist.&rdquo;
            Fenvik replied in the following issue with a letter addressed
            &ldquo;to my colleague, who has never been stuck behind a lorry in
            Haga.&rdquo;
          </p>
        </Prose>

        <div className="mt-12 space-y-8">
          {editors.map((editor, index) => (
            <EditorCard key={editor.name} editor={editor} delay={index * 150} />
          ))}
        </div>

        <Prose>
          <p className="mt-12">
            After Skell closed, Söderström returned to occasional freelance
            criticism for Arkitektur and taught a seminar on housing ethics at
            Chalmers until 1991. Fenvik moved to Visby and published one book
            of essays, <em>Gravstenar och gågator</em> (Gravestones and
            Pedestrian Streets), in 1987. Neither spoke publicly about the
            magazine&apos;s end.
          </p>
        </Prose>
      </PageContent>
      <ArchiveFooter />
    </>
  );
}
