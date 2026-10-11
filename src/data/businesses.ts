export type Business = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  status: "live" | "beta" | "coming-soon";
  url?: string;
  tags: string[];
};

export const businesses: Business[] = [
  {
    id: "app-one",
    name: "App One",
    tagline: "Short punchy tagline",
    description:
      "One or two sentences describing what this product does and who it's for.",
    logo: "/logos/app-one.svg",
    status: "live",
    url: "https://example.com",
    tags: ["Web", "SaaS"],
  },
  {
    id: "app-two",
    name: "App Two",
    tagline: "Another sharp tagline",
    description:
      "Description of the second product in the Nx Conglo portfolio.",
    logo: "/logos/app-two.svg",
    status: "beta",
    url: "https://example.com",
    tags: ["Mobile"],
  },
  {
    id: "app-three",
    name: "App Three",
    tagline: "Coming soon",
    description:
      "A product currently in development under the Nx Conglo umbrella.",
    logo: "/logos/app-three.svg",
    status: "coming-soon",
    tags: ["AI"],
  },
];