import type { Metadata } from "next";
import {
  AccentBarsSmall,
  PageContent,
  SectionHeading,
} from "@/components/page-elements";
import { ManifestoBody } from "@/components/manifesto-body";
import { ArchiveFooter } from "@/components/site-frame";
import { manifesto } from "@/lib/skell";

export const metadata: Metadata = {
  title: "manifesto — skell",
  description:
    "The founding manifesto of Skell, published in issue no. 1, spring 1971.",
};

export default function ManifestoPage() {
  return (
    <>
      <PageContent>
        <AccentBarsSmall />
        <p className="text-sm text-skell-cream/50">{manifesto.date}</p>
        <SectionHeading as="h1">{manifesto.title}</SectionHeading>
        <ManifestoBody paragraphs={manifesto.paragraphs} />
      </PageContent>
      <ArchiveFooter />
    </>
  );
}
