"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface IntroOverlayProps {
  onDone: () => void;
}

export default function IntroOverlay({ onDone }: IntroOverlayProps) {
  const [phase, setPhase] = useState<"drawing" | "fading">("drawing");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), 2000);
    const doneTimer = setTimeout(() => {
      onDone();
    }, 2700); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black transition-colors duration-300 ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div
        className={`relative w-[240px] sm:w-[320px] h-[125px] sm:h-[166px] -translate-y-8 transition-opacity duration-700 ease-in-out ${
          phase === "fading" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="nx-part-left absolute inset-0">
          <Image
            src={`${BASE}/brand/nx-left.png`}
            alt="Nx Conglo Left"
            width={500}
            height={260}
            priority
            className="w-full h-full object-contain select-none dark:invert"
          />
        </div>

        <div className="nx-part-right absolute inset-0">
          <Image
            src={`${BASE}/brand/nx-right.png`}
            alt="Nx Conglo Right"
            width={500}
            height={260}
            priority
            className="w-full h-full object-contain select-none dark:invert"
          />
        </div>
      </div>
    </div>
  );
}