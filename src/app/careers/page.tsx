import Link from "next/link";
import type { Metadata } from "next";
import { contactInfo } from "@/data/site";
import ContentRenderer from "@/components/ContentRenderer";
import { careers } from "@/data/legal/careers";

export const metadata: Metadata = {
  title: "Careers — Nx Conglo",
  description:
    "We are always looking for ambitious builders. See how you can join Nx Conglo.",
};

export default function CareersPage() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
            {careers.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            {careers.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {careers.intro}
          </p>
        </div>

        {/* The Philosophy */}
        <div className="mt-16 space-y-12 border-t border-slate-200 dark:border-zinc-800 pt-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {careers.sections.noRoles.heading}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {careers.sections.noRoles.body}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {careers.sections.lookingFor.heading}
            </h2>
            <ContentRenderer
              blocks={[
                {
                  type: "list",
                  items: careers.sections.lookingFor.items,
                  emphasis: true,
                },
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            {careers.sections.cta.heading}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            {careers.sections.cta.body}
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=Open Application — Nx Conglo`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            {careers.sections.cta.buttonLabel}
            <span className="ml-2" aria-hidden>
              ↗
            </span>
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800">
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            ← Back to Nx Conglo
          </Link>
        </div>
      </div>
    </div>
  );
}