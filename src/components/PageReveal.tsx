"use client";

import { useEffect, useState } from "react";

interface PageRevealProps {
  children: React.ReactNode;
}

export default function PageReveal({ children }: PageRevealProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // If they already saw the intro this session, reveal immediately
    if (sessionStorage.getItem("nx-intro-seen")) {
      setRevealed(true);
      return;
    }

    const handler = () => setRevealed(true);
    window.addEventListener("nx:intro-done", handler);
    return () => window.removeEventListener("nx:intro-done", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}