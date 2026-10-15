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
    tagline: "OS that tracks all your activities",
    description:
      "The operating system for ambitious individuals: one place to plan goals, build skills, manage projects, track time, and review progress with measurable data.",
    logo: "/logos/career-os.png",
    status: "live",
    url: "https://nxt3r.github.io/Career-OS",
    tags: ["Web", "Productivity", "Pomodoro"],
    year: 2026,
  },
  {
    id: "fixtional",
    name: "Fixtional",
    tagline: "Fixing the digital mess",
    description:
      "Fixtional is a digital support service focused on helping people troubleshoot technical problems, clean up software issues, and get their devices working properly — without unnecessary complexity or expensive support.",
    logo: "/logos/fixtional.png",
    status: "live",
    url: "https://nxt3r.github.io/Fixtional",
    tags: ["Web", "Support", "Consultation"],
    year: 2025,
  },
    {
    id: "nportx",
    name: "NportX",
    tagline: "Find and kill processes hogging your ports. Instantly. Cross-platform. Single binary.",
    description:
      "NportX is a fast, cross-platform CLI that shows you exactly what's running on every port — and lets you kill it in one command. The problem is universal: 'Port 3000 is already in use.' Every developer hits it. The standard fixes (lsof, netstat, taskkill) are platform-specific, ugly, and slow to type. NportX is different. It's a single Rust binary with no runtime dependencies — no Python, no Node, no Docker. Runs the same on macOS, Linux, and Windows. Startup is instant. Output is clean and color-coded so you can spot your own dev servers at a glance. It ships with a safety guard that refuses to kill critical system processes, and every kill requires confirmation. It's fast, but it's not reckless.",
    logo: "/logos/nportx.png",
    status: "live",
    url: "https://github.com/nxt3r/NportX",
    tags: ["CLI", "Port", "Developer Tool"],
    year: 2026,
  },
];

export function getVenture(id: string): Venture | undefined {
  return ventures.find((v) => v.id === id);
}