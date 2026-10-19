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

  if (!isMounted) return null;

  return (
    <>
      {showIntro && !done && <IntroOverlay onDone={handleDone} />}
      <PageReveal>{children}</PageReveal>
    </>
  );
}