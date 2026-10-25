import Link from "next/link";
import type { Metadata } from "next";
import ContentRenderer from "@/components/ContentRenderer";
import { manifesto } from "@/data/legal/manifesto";

export const metadata: Metadata = {
  title: "Manifesto — Nx Conglo",
  description:
    "How Nx Conglo operates. Profitability over vanity metrics. Software as leverage.",
};

export default function ManifestoPage() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-300">
          {manifesto.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 transition-colors duration-300">
          {manifesto.subtitle}
        </p>

        <div className="space-y-10">
          <ContentRenderer blocks={manifesto.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            ← Back to Nx Conglo
          </Link>
        </div>
      </div>
    </div>
  );
}