import { careerOs } from "./career-os";
import { fixtional } from "./fixtional";
import { nportx } from "./nportx";
import { scrunkzunk } from "./scrunkzunk";

export type VentureStatus = "live" | "coming-soon";

export type ContentBlock = 
  | { 
      type: "paragraph"; 
      text: string; 
      link?: { label: string; url: string }; 
    }
  | { type: "heading"; text: string }
  | { 
      type: "list"; 
      items: string[]; 
      emphasis?: boolean; 
    }
  | { type: "link"; text: string; url: string };

export type Venture = {
  id: string;
  name: string;
  tagline: string;
  /** Short description — used for SEO and if needed as a subtitle */
  description: string;
  /** Long-form content for the detail page */
  content: ContentBlock[];
  logo: string;
  status: VentureStatus;
  url?: string;
  tags: string[];
  year: number;
};

// The master array used by the Homepage and Sitemap
export const ventures: Venture[] = [careerOs, fixtional, nportx, scrunkzunk];

// Helper for the [id] route
export function getVenture(id: string): Venture | undefined {
  return ventures.find((v) => v.id === id);
}