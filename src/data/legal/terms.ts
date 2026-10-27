import type { ContentBlock } from "@/data/ventures";
import { contactInfo } from "@/data/site";

export const terms = {
  title: "Terms of Service",
  lastUpdated: "2026-10-25",
content: [
  { type: "heading", text: "1. Acceptance of Terms" },
  {
    type: "paragraph",
    text: "By accessing or using the Nx Conglo website, you agree to these Terms of Service. If you do not agree with these terms, please discontinue use of the website.",
  },
  { type: "heading", text: "2. Intellectual Property" },
  {
    type: "paragraph",
    text: "Unless otherwise stated, the content created for this website, including its text, logos, graphics, and design, belongs to Nx Conglo and is protected by applicable intellectual property laws. You may not reproduce, modify, distribute, or use this content for commercial purposes without prior permission, except where permitted by law.",
  },
  {
    type: "paragraph",
    text: "Some names, logos, products, and materials referenced on this website may belong to their respective owners. Their appearance on the website does not imply that Nx Conglo owns them or that their owners endorse Nx Conglo.",
  },
  { type: "heading", text: "3. Website Use & External Links" },
  {
    type: "paragraph",
    text: "You agree to use this website lawfully and not to attempt to disrupt its operation, compromise its security, or misuse its content. This website may link to external websites, platforms, and ventures that operate independently of Nx Conglo. We do not control or guarantee the availability, accuracy, security, or content of those external services. Accessing them is at your own discretion and subject to their respective terms and policies.",
  },
  { type: "heading", text: "4. Disclaimer" },
  {
    type: "paragraph",
    text: 'This website and its content are provided on an "as is" and "as available" basis, to the extent permitted by applicable law. We make no guarantees that the website will always be accurate, available, secure, error-free, or uninterrupted. Information about Nx Conglo and its ventures is provided for general informational purposes and may change without notice.',
  },
  {
    type: "paragraph",
    text: "Any third-party tools, products, or software referenced or linked from this website are used or accessed at your own discretion. Their functionality, suitability, and safety are the responsibility of their respective providers.",
  },
  { type: "heading", text: "5. Limitation of Liability" },
  {
    type: "paragraph",
    text: "To the extent permitted by applicable law, Nx Conglo shall not be liable for indirect, incidental, consequential, or special damages arising from or related to your use of, or inability to use, this website. Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited.",
  },
  { type: "heading", text: "6. Changes to These Terms" },
  {
    type: "paragraph",
    text: "We may update these Terms of Service as the website and Nx Conglo evolve. Any revised terms will be published on this page, and the updated version will apply from the date it is posted. We encourage visitors to review this page periodically.",
  },
  { type: "heading", text: "7. Contact Us" },
  {
    type: "paragraph",
    text: "If you have questions about these Terms of Service, please contact us at",
    link: { 
    label: contactInfo.email, 
    url: `mailto:${contactInfo.email}?subject=Terms of Service Inquiry — Nx Conglo` 
    },
  },
]satisfies ContentBlock[],
};