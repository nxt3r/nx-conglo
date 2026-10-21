"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnchorLink from "@/components/AnchorLink";
import BrandMark from "@/components/BrandMark";
import { contactInfo } from "@/data/site";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // This observer watches the sections. 
    // The rootMargin "-20% 0px -80% 0px" means a section is only "active" 
    // when it crosses the top 20% of the viewport. 
    // When you hit the footer, neither section is in that zone, so it clears!
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
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        
        {/* Fixed Logo Hover (Added hover:opacity-80 transition-opacity) */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <BrandMark className="h-7 w-auto" />
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Nx Conglo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          
          <AnchorLink 
            hash="#ventures" 
            href="#ventures" 
            className={`transition-colors ${
              activeSection === "#ventures" ? "text-gray-900 font-semibold" : "hover:text-gray-900"
            }`}
          >
            Ventures
          </AnchorLink>
          
          <AnchorLink 
            hash="#about" 
            href="#about" 
            className={`transition-colors ${
              activeSection === "#about" ? "text-gray-900 font-semibold" : "hover:text-gray-900"
            }`}
          >
            About
          </AnchorLink>
          
          <a 
            href={`mailto:${contactInfo.email}`} 
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}