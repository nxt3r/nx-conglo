"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnchorLink from "@/components/AnchorLink";
import BrandMark from "@/components/BrandMark";
import { contactInfo } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Only observe sections on the homepage
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        
        <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <BrandMark className="h-7 w-auto" />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Nx Conglo
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            
            <AnchorLink 
              hash="#ventures" 
              href="#ventures" 
              className={`transition-colors ${
                activeSection === "#ventures" ? "text-gray-900 dark:text-white font-semibold" : "hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Ventures
            </AnchorLink>
            
            <AnchorLink 
              hash="#about" 
              href="#about" 
              className={`transition-colors ${
                activeSection === "#about" ? "text-gray-900 dark:text-white font-semibold" : "hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              About
            </AnchorLink>
            
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
          
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}