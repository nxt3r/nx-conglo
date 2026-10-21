import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { contactInfo, socialLinks } from "@/data/site";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "instagram") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }

  return null;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-8">
        
        {/* Top Section: Grid (Brand, Contact, Social) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <BrandMark className="h-7 w-auto" />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Nx Conglo
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Independent by nature. Ambitious by design.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <SocialIcon icon={link.icon} />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Changed to gray-500 */}
          <p className="text-sm text-gray-500">
            © 2026–{currentYear} Nx Conglo. All rights reserved.
          </p>
          
          {/* Hover changed to slate-900 to match the brand */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}