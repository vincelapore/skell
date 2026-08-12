import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AccentBarsSmall,
  PageContent,
  Prose,
  SectionHeading,
} from "@/components/page-elements";
import { IssueCover } from "@/components/issue-cover";
import { ArchiveFooter } from "@/components/site-frame";
import { getCoverByIssueNumber, getIssueByNumber, getIssueDisplay, magazine } from "@/lib/skell";

type Props = {
  params: Promise<{ number: string }>;
};

export async function generateStaticParams() {
  const { issues } = await import("@/lib/skell");
  return issues.map((issue) => ({
    number: String(issue.number),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  const issue = getIssueByNumber(Number(number));
  if (!issue) return { title: "issue not found — skell" };

  return {
    title: `${issue.title} — skell`,
    description: issue.excerpt,
  };
}

export default async function IssuePage({ params }: Props) {
  const { number } = await params;
  const issue = getIssueByNumber(Number(number));
  const cover = getCoverByIssueNumber(Number(number));

  if (!issue) {
    notFound();
  }

  return (
    <>
      <PageContent>
        <AccentBarsSmall />
        <p className="text-sm text-skell-cream/50">{getIssueDisplay(issue)}</p>
        <SectionHeading as="h1">{issue.title}</SectionHeading>
        {issue.subtitle && (
          <p className="-mt-4 mb-6 text-lg text-skell-gold">{issue.subtitle}</p>
        )}

        {cover && <IssueCover cover={cover} />}

        <Prose>
          <p>{issue.excerpt}</p>
          <p>
            This issue is part of the Skell archival record. Full digitisation
            is pending review by Göteborgs stadsbibliotek. Researchers may
            request physical access through the library&apos;s special
            collections desk.
          </p>
          {issue.number === magazine.issueCount && (
            <p>
              The final issue carried no table of contents. Subscribers who
              wrote to ask whether publication would continue received a blank
              card: <em>vi har inget mer att säga.</em>
            </p>
          )}
        </Prose>

        <Link
          href="/issues"
          className="skell-link mt-10 inline-block text-sm text-skell-gold"
        >
          ← back to issue index
        </Link>
      </PageContent>
      <ArchiveFooter />
    </>
  );
}
