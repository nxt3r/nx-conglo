"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Venture } from "@/data/ventures";

export function VentureHero({ venture, basePath }: { venture: Venture; basePath: string }) {
  const statusStyles: Record<string, string> = {
    live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    "coming-soon": "bg-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-slate-300",
  };

  const statusLabels: Record<string, string> = {
    live: "Live",
    "coming-soon": "Coming Soon",
  };

  return (
    <motion.div layoutId={`venture-card-${venture.id}`} className="w-full bg-white dark:bg-black transition-colors duration-300 rounded-2xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800 ring-1 ring-inset ring-slate-100 dark:ring-zinc-800">
        <Image
          src={`${basePath}${venture.logo}`}
          alt={`${venture.name} logo`}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-contain p-10"
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[venture.status]}`}>
          {statusLabels[venture.status]}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
          Launched {venture.year}
        </span>
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl transition-colors">
        {venture.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-slate-500 dark:text-slate-400 transition-colors">
        {venture.tagline}
      </p>
    </motion.div>
  );
}