import type { Metadata } from "next";
import { Limelight } from "next/font/google";
import { ArchivalNotice } from "@/components/archival-notice";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-limelight",
});

export const metadata: Metadata = {
  title: "skell — archival record",
  description:
    "An archival record of Skell, the Scandinavian architecture magazine that ceased publication in 1983. 47 issues of architectural criticism from the 1970s.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${limelight.variable} h-full`}>
      <body className="min-h-full">
        <ArchivalNotice />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
