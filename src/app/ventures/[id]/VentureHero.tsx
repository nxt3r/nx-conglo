"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Venture } from "@/data/ventures";

export function VentureHero({ venture, basePath }: { venture: Venture; basePath: string }) {
  const statusStyles: Record<string, string> = {
    live: "bg-emerald-100 text-emerald-800",
    "coming-soon": "bg-slate-200 text-slate-700",
  };

  const statusLabels: Record<string, string> = {
    live: "Live",
    "coming-soon": "Coming Soon",
  };

  return (
    <motion.div layoutId={`venture-card-${venture.id}`} className="w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-inset ring-slate-100">
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
        <span className="text-sm text-slate-500">Launched {venture.year}</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {venture.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-slate-500">
        {venture.tagline}
      </p>
    </motion.div>
  );
}