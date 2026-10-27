import type { ContentBlock } from "@/data/ventures";
import { contactInfo } from "@/data/site";

export const privacy = {
  title: "Privacy Policy",
  lastUpdated: "2026-10-25",
content: [
  { type: "heading", text: "1. Information We Collect" },
  {
    type: "paragraph",
    text: "Nx Conglo operates an informational website introducing the organization and its ventures. You can browse the website without creating an account.",
  },
  {
    type: "paragraph",
    text: "We do not intentionally collect personal information through the website's general browsing experience. If you contact us by email, we receive your email address and any information you choose to include in your message. We use that information to respond to your inquiry and communicate with you as necessary.",
  },
  {
    type: "paragraph",
    text: "Our website hosting provider may process certain technical information, such as IP addresses, browser details, and server logs, as part of delivering and maintaining the website. The information collected depends on the hosting infrastructure and its configuration.",
  },
  { type: "heading", text: "2. Usage Data & Analytics" },
  {
    type: "paragraph",
    text: "We may use basic analytics to understand how visitors interact with the website, such as which pages receive visits and how the website is used. Where possible, we aim to use aggregated information that does not directly identify individual visitors. The specific information collected depends on the analytics tools, if any, enabled on the website.",
  },
  { type: "heading", text: "3. Third-Party Links" },
  {
    type: "paragraph",
    text: "Our website may contain links to external websites, platforms, and individual ventures, including GitHub and Instagram. When you follow these links, you leave the Nx Conglo website and become subject to the privacy practices and terms of the relevant third party. We do not control how external websites collect, use, or protect your information. We encourage you to review their privacy policies before sharing personal information with them.",
  },
  { type: "heading", text: "4. Contact Us" },
  {
    type: "paragraph",
    text: "If you have any questions about this Privacy Policy, please contact us at",
    link: { 
    label: contactInfo.email, 
    url: `mailto:${contactInfo.email}?subject=Privacy Policy Inquiry — Nx Conglo` 
    },
  },
] satisfies ContentBlock[],
};