"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";
import { contactInfo, socialLinks } from "@/data/site";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }

  return null;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 py-16"
        >
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <BrandMark className="h-7 w-auto" />
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Nx Conglo
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Independent by nature. Ambitious by design.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Follow us</h3>
            <ul className="flex items-center gap-4"> 
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>

      <div className="bg-black dark:bg-zinc-900 text-gray-300 py-4 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm">
            Copyright © 2026–{currentYear} Nx Conglo. All Rights Reserved.
          </p>

          <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-6">
            
            <div className="flex items-center gap-4 text-sm">
              <Link href="/blog" prefetch={false} className="hover:text-white transition-colors">
                Blog
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/careers" prefetch={false} className="hover:text-white transition-colors">
                Careers
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/manifesto" prefetch={false} className="hover:text-white transition-colors">
                Manifesto
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            <button 
              onClick={scrollToTop}
              className="ml-2 flex h-8 w-8 items-center justify-center bg-white/10 text-gray-300 transition-colors hover:bg-white/20 hover:text-white rounded"
              aria-label="Back to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}