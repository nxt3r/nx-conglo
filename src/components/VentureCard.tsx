"use client";

import Image from "next/image";
import Link from "next/link";
import type { Venture } from "@/data/ventures";
import { motion } from "framer-motion";

const statusStyles: Record<Venture["status"], string> = {
  live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  "coming-soon": "bg-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-slate-300",
};

const statusLabels: Record<Venture["status"], string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
};

export default function VentureCard({ venture }: { venture: Venture }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <Link href={`/ventures/${venture.id}`} className="group flex flex-col h-full">
      <motion.div
        layoutId={`venture-card-${venture.id}`}
        className="flex flex-col flex-1 overflow-hidden rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-lg"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800 ring-1 ring-inset ring-slate-100 dark:ring-zinc-800">
          <Image
            src={`${basePath}${venture.logo}`}
            alt={`${venture.name} logo`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-6 transition group-hover:scale-[1.02]"
          />
          <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[venture.status]}`}>
            {statusLabels[venture.status]}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors">{venture.name}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">{venture.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {venture.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-slate-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 dark:text-white transition-colors">
              Learn more
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}