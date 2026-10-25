import type { ContentBlock } from "@/data/ventures";

export const manifesto = {
  title: "Manifesto",
  subtitle: "How we build.",
content: [
  { type: "heading", text: "1. Profitability over vanity metrics." },
  {
    type: "paragraph",
    text: "We measure success through sustainable revenue, real-world value, and staying power — not follower counts or funding announcements.",
  },
  { type: "heading", text: "2. Leverage over busywork." },
  {
    type: "paragraph",
    text: "We use software, systems, and thoughtful processes to multiply our impact. We build things that compound in value rather than work that has to start from zero every month.",
  },
  { type: "heading", text: "3. Small teams, real ownership." },
  {
    type: "paragraph",
    text: "We value people who take responsibility for outcomes, make decisions, and see things through over layers of people who simply move tickets.",
  },
  { type: "heading", text: "4. Ship, then refine." },
  {
    type: "paragraph",
    text: "A working first release teaches more than a perfect plan that never leaves the whiteboard. We build, learn from reality, and improve with purpose.",
  },
  { type: "heading", text: "5. Solid foundations, exceptional outcomes." },
  {
    type: "paragraph",
    text: "Our infrastructure and processes should be dependable and unobtrusive, leaving room for the products, services, and experiences themselves to stand out.",
  },
  { type: "heading", text: "6. Built for the long term." },
  {
    type: "paragraph",
    text: "Nx Conglo is built for sustained growth, not short-lived wins. Every venture should have a purpose, a strong foundation, and the potential to grow beyond the attention of any one individual.",
  },
] satisfies ContentBlock[],
};