import type { ContentBlock } from "@/data/ventures";

export const site = {
  name: "Nx Conglo",
  tagline: "Building businesses that matter.",
  founded: 2026,
  stats: {
    ventures: 3, 
    countries: 1,
    comingSoon: 0,
  },
  
  // NEW: Rich content for the About section
  
  about: ([
  {
    type: "paragraph",
    text: "Nx Conglo (NxC) is a venture company built around a simple principle: meaningful ideas deserve the opportunity to become something real. We create and develop ventures across different fields, bringing distinct ideas under one organization without limiting what those ideas can be or where they can lead."
  },
  {
    type: "paragraph",
    text: "NxC is the organization behind the ventures, not a single product with a fixed audience or purpose. Each venture has its own identity, direction, and reason to exist. They share a common foundation, but they are not required to look alike, serve the same market, or follow the same path. The connection is in the standards we hold ourselves to, not in forcing every idea into the same shape."
  },
  {
    type: "heading",
    text: "One organization. No fixed boundaries."
  },
  {
    type: "paragraph",
    text: "We don't believe worthwhile opportunities have to fit neatly into one industry. Technology, software, services, or something entirely different — NxC is built to explore ideas wherever there is a genuine problem to solve and a meaningful way to contribute. Our direction can evolve, our scope can expand, and our ventures can take forms that have little in common with one another."
  },
  {
    type: "paragraph",
    text: "That flexibility is intentional. We want NxC to grow beyond a narrow category without losing the sense of purpose that makes a venture worth building. Expansion, for its own sake, isn't the point. The point is to recognize opportunities, develop them with care, and create things that genuinely matter to the people they serve."
  },
  {
    type: "heading",
    text: "What we stand for"
  },
  {
    type: "paragraph",
    text: "Our ventures may differ in what they do, but the principles behind them remain consistent."
  },
  {
    type: "list",
    items: [
      "Real value over empty activity — what we build should serve a meaningful purpose and help people in a tangible way.",
      "Quality without compromise — ideas deserve thoughtful execution, dependable foundations, and attention to the details that affect the people using them.",
      "Independent thinking — we aren't interested in following a direction simply because it is popular. We question conventions, explore alternatives, and make decisions based on the problem rather than the prevailing trend.",
      "Ambition with purpose — we want to build ventures that can grow, evolve, and reach further, without losing sight of why they exist."
    ]
  },
  {
    type: "heading",
    text: "Different ventures. Equal respect."
  },
  {
    type: "paragraph",
    text: "Not every venture needs the same scale, audience, resources, or definition of success. A small, focused tool can be just as meaningful as a much larger undertaking when both serve their purpose well. At NxC, we don't measure a venture's worth solely by its size, visibility, or commercial potential. We care about what it contributes and whether it genuinely helps the people it was created for."
  },
  {
    type: "paragraph",
    text: "This also means giving each venture room to develop its own identity. NxC provides the broader organizational foundation, while each venture is free to establish its own character, priorities, and relationship with its audience. Unity at the organizational level should create room for individuality, not erase it."
  },
  {
    type: "heading",
    text: "Never built just to fit in"
  },
  {
    type: "paragraph",
    text: "We have little interest in becoming another name in a crowded wave of things that look and sound the same. Being different isn't about being unusual for attention; it's about having the independence to question familiar approaches and the discipline to build something better when a better approach exists."
  },
  {
    type: "paragraph",
    text: "That means choosing substance over appearances, usefulness over noise, and thoughtful execution over chasing whatever happens to be popular. Not every idea needs to reinvent an entire field. Sometimes the difference is in solving a familiar problem more clearly, removing an unnecessary complication, or approaching an overlooked need with the attention it deserves."
  },
  {
    type: "heading",
    text: "Built to keep moving"
  },
  {
    type: "paragraph",
    text: "Nx Conglo is intended to grow into an organization with the capacity to develop and support ventures across multiple fields. That ambition requires more than launching ideas: it means building the foundations, standards, and structure that allow different ventures to mature without losing their individual identities."
  },
  {
    type: "paragraph",
    text: "We don't see the current scope of NxC as a final definition. New fields may bring new challenges, new kinds of work, and entirely different ways of creating value. As the organization grows, its structure can evolve with it. What should remain constant is the commitment to building with purpose, treating every venture with respect, and making the result worthwhile for the people it serves."
  },
  {
    type: "paragraph",
    text: "NxC is a continuing effort to turn worthwhile ideas into real ventures — independently minded, deliberately built, and open to wherever meaningful work may lead."
  }
] as ContentBlock[]),
}

