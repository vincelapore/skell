import type { Metadata } from "next";
import { IssueCardLink } from "@/components/content-cards";
import { CoverGallery } from "@/components/cover-gallery";
import { IssueIndexCell } from "@/components/issue-index-cell";
import {
  AccentBarsSmall,
  PageContent,
  Prose,
  SectionHeading,
} from "@/components/page-elements";
import { ArchiveFooter } from "@/components/site-frame";
import { covers, getAllIssueNumbers, issues, magazine } from "@/lib/skell";

export const metadata: Metadata = {
  title: "issues — skell",
  description:
    "Complete archival index of Skell's 47 issues, published quarterly from 1971 to 1983.",
};

export default function IssuesPage() {
  const allNumbers = getAllIssueNumbers();
  const documented = new Set(issues.map((i) => i.number));

  return (
    <>
      <PageContent>
        <AccentBarsSmall />
        <SectionHeading as="h1">issue index</SectionHeading>

        <Prose>
          <p>
            Skell published {magazine.issueCount} quarterly issues between{" "}
            {magazine.founded} and {magazine.ceased}. Detailed records exist
            for {issues.length} issues; the remainder are listed by number
            only, their contents known from subscriber correspondence and
            partial holdings at Göteborgs stadsbibliotek.
          </p>
        </Prose>

        <SectionHeading>cover examples</SectionHeading>
        <Prose>
          <p>
            Four covers survive in the Göteborgs stadsbibliotek holdings. Skell
            never printed its name on the front — only the issue number, in
            varying typefaces chosen by the editors.
          </p>
        </Prose>
        <div className="mb-12">
          <CoverGallery covers={covers} />
        </div>

        <SectionHeading>documented issues</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {issues.map((issue, index) => (
            <IssueCardLink key={issue.number} issue={issue} delay={index * 100} />
          ))}
        </div>

        <SectionHeading>complete index</SectionHeading>
        <ol className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
          {allNumbers.map((num, index) => (
            <IssueIndexCell
              key={num}
              num={num}
              documented={documented.has(num)}
              delay={(index % 8) * 40}
            />
          ))}
        </ol>
      </PageContent>
      <ArchiveFooter />
    </>
  );
}
