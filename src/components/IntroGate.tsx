"use client";

import { useEffect, useState } from "react";
import IntroOverlay from "./IntroOverlay";
import PageReveal from "./PageReveal";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const hasSeen = sessionStorage.getItem("nx-intro-seen");
    
    if (hasSeen) {
      setShowIntro(false);
      setDone(true);
    } else {
      setShowIntro(true);
      setDone(false);
    }
  }, []);

  const handleDone = () => {
    sessionStorage.setItem("nx-intro-seen", "1");
    window.dispatchEvent(new Event("nx:intro-done"));
    setDone(true);
  };

  // Prevent white flash on initial mount by rendering a dark-aware skeleton
  if (!isMounted) {
    return <div className="fixed inset-0 bg-white dark:bg-black transition-colors duration-300" />;
  }

  return (
    <>
      {showIntro && !done && <IntroOverlay onDone={handleDone} />}
      <PageReveal>{children}</PageReveal>
    </>
  );
}