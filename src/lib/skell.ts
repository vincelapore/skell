export type Issue = {
  number: number;
  season: string;
  year: number;
  title: string;
  subtitle?: string;
  excerpt: string;
  featured?: boolean;
};

export type Cover = {
  issueNumber: number;
  image: string;
  note?: string;
};

export type Editor = {
  name: string;
  born: number;
  role: string;
  bio: string;
  quote: string;
};

export type TimelineEvent = {
  year: number;
  label: string;
  detail: string;
};

export const magazine = {
  name: "skell",
  tagline: "a magazine of scandinavian architectural criticism",
  founded: 1971,
  ceased: 1983,
  city: "göteborg",
  country: "sweden",
  issueCount: 47,
  frequency: "quarterly",
  printRun: "~2,400 copies per issue",
  language: "swedish, with english summaries from issue 12 onward",
  description:
    "Skell was founded in 1971 by two critics who believed Scandinavian architecture had become too polite — too willing to confuse administrative competence with moral seriousness. The magazine published quarterly from a converted sail loft in Göteborg's Haga district, printing essays, building studies, and correspondence that treated the Nordic welfare state's built environment as a field of argument, not ornament.",
  origin:
    "The name derives from the Swedish skal — shell, husk, outer form. Söderström and Fenvik chose it to insist that architecture's ethical content lives in what buildings do to bodies in weather, not in what they signify on magazine covers.",
};

export const editors: Editor[] = [
  {
    name: "britta söderström",
    born: 1944,
    role: "founding editor · architecture",
    bio: "Trained at Chalmers University of Technology, Söderström practiced briefly in Malmö before turning to criticism full-time in 1969. Her early essays on the Million Programme argued that quantity housing had produced a new kind of loneliness — not despite its rational plans, but because of them. She wrote thirteen of Skell's most cited essays and remained the magazine's primary voice on housing policy until its final issue.",
    quote:
      "A facade is not a face. It is a negotiation between what a building admits and what it refuses to show.",
  },
  {
    name: "lars fenvik",
    born: 1939,
    role: "founding editor · public life",
    bio: "Fenvik came to architecture by way of municipal reporting for Göteborgs-Posten, where he covered planning commissions, cemetery extensions, and the politics of waterfront redevelopment. At Skell he wrote on memorials, churchyards, harbour edges, and the slow violence of traffic engineering. Colleagues described his prose as 'forensic without being cold' — a style the magazine never successfully imitated after his departure.",
    quote:
      "Every plaza has a theory of who belongs. Most theories are wrong.",
  },
];

export const manifesto = {
  title: "our reasons for publishing",
  date: "spring 1971 · issue no. 1",
  paragraphs: [
    "We begin Skell because Scandinavian architecture has excellent technicians and insufficient critics. The region builds well and thinks poorly about what it builds. Our welfare states have produced millions of square metres of housing, schools, and clinics — and almost no language adequate to judge them.",
    "We are not interested in the international circuit of architectural celebrity. We are interested in the bus stop in Östersund, the parish hall in Tromsø, the concrete stairwell in Rosengård, the harbour wall in Ålesund. These are not marginal sites. They are where most people meet architecture.",
    "Skell will publish slowly. We will prefer essays to news. We will print letters from readers who disagree with us, including those who believe we are nostalgic, elitist, or insufficiently attentive to the global south. We may be all three. We intend to find out.",
    "We believe light is a material. We believe timber is a political choice. We believe the post-war settlement in Nordic housing was a civilisational achievement and a civilisational failure, often in the same building.",
    "This magazine will cease when it has nothing left to say. We hope that moment is far away. We suspect it is closer than we think.",
  ],
};

export const timeline: TimelineEvent[] = [
  {
    year: 1971,
    label: "first issue",
    detail:
      "Skell launches from a sail loft at Haga Nygata 12. Initial print run of 800 copies sells out in six weeks.",
  },
  {
    year: 1973,
    label: "the housing tribunal",
    detail:
      "Issue 12 publishes a roundtable with tenants from Stockholm, Helsinki, and Copenhagen. Circulation doubles.",
  },
  {
    year: 1974,
    label: "concrete and blood",
    detail:
      "Söderström's essay on brutalism's human costs provokes walkouts at the ArkDes symposium and three cancelled subscriptions from municipal architects.",
  },
  {
    year: 1976,
    label: "light in the north",
    detail:
      "The 'ljus i norr' issue becomes Skell's most reprinted number, cited in planning documents across Norway and Finland.",
  },
  {
    year: 1978,
    label: "against style",
    detail:
      "Fenvik's editorial rejecting postmodern ornament splits the readership. A rival pamphlet, Glas, calls Skell 'the undertaker of joy.'",
  },
  {
    year: 1980,
    label: "the oil winter",
    detail:
      "Issue 39 documents energy retrofit failures across Nordic social housing. Skell's only issue to receive government correspondence.",
  },
  {
    year: 1983,
    label: "final issue",
    detail:
      "Issue 47 prints a joint farewell by Söderström and Fenvik. The magazine closes without announcement. Subscribers receive a blank card with a single line: 'vi har inget mer att säga.'",
  },
];

export const covers: Cover[] = [
  {
    issueNumber: 1,
    image: "/images/covers/issue-1.png",
    note: "founding issue · spring 1971",
  },
  {
    issueNumber: 3,
    image: "/images/covers/issue-3.png",
    note: "autumn 1971 · cover by studion E",
  },
  {
    issueNumber: 12,
    image: "/images/covers/issue-12.png",
    note: "the million programme special · summer 1973",
  },
  {
    issueNumber: 31,
    image: "/images/covers/issue-31.png",
    note: "against style · winter 1978",
  },
];

export const issues: Issue[] = [
  {
    number: 1,
    season: "spring",
    year: 1971,
    title: "varför bygger vi så?",
    subtitle: "why do we build this way?",
    excerpt:
      "The founding issue. Söderström on the moral poverty of functionalist slogans; Fenvik on Göteborg's demolished fish market.",
    featured: true,
  },
  {
    number: 4,
    season: "winter",
    year: 1971,
    title: "betong och blod",
    subtitle: "concrete and blood",
    excerpt:
      "An issue-length study of Nordic brutalism's human costs, with photographs by Ingrid Holm and a reply from a Tapiola resident committee.",
    featured: true,
  },
  {
    number: 12,
    season: "summer",
    year: 1973,
    title: "hus för alla",
    subtitle: "houses for everyone",
    excerpt:
      "The Million Programme special: essays from Stockholm, Helsinki, and Copenhagen tenants, plus English summaries for the first time.",
    featured: true,
  },
  {
    number: 19,
    season: "autumn",
    year: 1975,
    title: "kyrkogårdar",
    subtitle: "cemeteries",
    excerpt:
      "Fenvik on burial grounds as public space. Includes a survey of twelve parish churchyards and a letter from a Lund stonemason.",
  },
  {
    number: 23,
    season: "spring",
    year: 1976,
    title: "ljus i norr",
    subtitle: "light in the north",
    excerpt:
      "Skell's most cited issue: essays on window proportion, seasonal depression, and the politics of glazing in social housing.",
    featured: true,
  },
  {
    number: 31,
    season: "winter",
    year: 1978,
    title: "mot stilen",
    subtitle: "against style",
    excerpt:
      "The postmodernism issue. Fenvik's editorial rejects ornament as evasion; Glas publishes a response pamphlet within the month.",
  },
  {
    number: 39,
    season: "autumn",
    year: 1980,
    title: "oljevintern",
    subtitle: "the oil winter",
    excerpt:
      "Documentation of failed energy retrofits across Nordic housing estates. The only issue to receive official government correspondence.",
  },
  {
    number: 44,
    season: "summer",
    year: 1982,
    title: "hamnkanter",
    subtitle: "harbour edges",
    excerpt:
      "Waterfront redevelopment in Bergen, Göteborg, and Turku. Söderström's penultimate essay on public access and private profit.",
  },
  {
    number: 47,
    season: "winter",
    year: 1983,
    title: "sista numret",
    subtitle: "the final issue",
    excerpt:
      "Joint farewell editorial. No table of contents. Subscribers later receive a blank card: 'vi har inget mer att säga.'",
    featured: true,
  },
];

export function getFeaturedIssues(): Issue[] {
  return issues.filter((issue) => issue.featured);
}

export function getIssueByNumber(number: number): Issue | undefined {
  return issues.find((issue) => issue.number === number);
}

export function getAllIssueNumbers(): number[] {
  return Array.from({ length: magazine.issueCount }, (_, i) => i + 1);
}

export function getIssueDisplay(issue: Issue): string {
  return `no. ${issue.number} · ${issue.season} ${issue.year}`;
}

export function getCoverByIssueNumber(number: number): Cover | undefined {
  return covers.find((cover) => cover.issueNumber === number);
}
