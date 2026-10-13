export type VentureStatus = "live" | "coming-soon";

export type Venture = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string; // path relative to /public, e.g. "/logos/career-os.png"
  status: VentureStatus;
  url?: string;
  tags: string[];
  year: number;
};

export const ventures: Venture[] = [
  {
    id: "career-os",
    name: "Career OS",
    tagline: "The OS that tracks all your activities",
    description:
      "The operating system for ambitious individuals: one place to plan goals, build skills, manage projects, track time, and review progress with measurable data.",
    logo: "/logos/career-os.png",
    status: "live",
    url: "https://nxt3r.github.io/Career-OS-Build",
    tags: ["Web", "Productivity"],
    year: 2026,
  },
  {
    id: "fixtional",
    name: "Fixtional",
    tagline: "Fixing the digital mess",
    description:
      "Fixtional is a digital support service focused on helping people troubleshoot technical problems, clean up software issues, and get their devices working properly — without unnecessary complexity or expensive support.",
    logo: "/logos/fixtional.png",
    status: "coming-soon",
    url: "https://nxt3r.github.io/Fixtional",
    tags: ["Web", "Support"],
    year: 2026,
  },
];

export function getVenture(id: string): Venture | undefined {
  return ventures.find((v) => v.id === id);
}