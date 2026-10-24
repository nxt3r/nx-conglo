import Link from "next/link";
import { contactInfo } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Nx Conglo",
  description: "We are always looking for ambitious builders. See how you can join Nx Conglo.",
};

export default function CareersPage() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
            Careers
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            Build things that matter
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Nx Conglo is a small, independent holding company. We don&apos;t have a traditional HR department, and we don&apos;t hire just to fill seats. We hire when we find people who share our obsession with building high-quality software.
          </p>
        </div>

        {/* The Philosophy */}
        <div className="mt-16 space-y-12 border-t border-slate-200 dark:border-zinc-800 pt-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No open roles right now.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We are currently not hiring for specific positions. However, we are always looking for exceptional engineers, designers, and operators who want to build businesses from the ground up.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What we look for.</h2>
            <ul className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="text-slate-400 dark:text-zinc-600 mt-1">→</span>
                <span><strong>Product-minded builders.</strong> You care about the why, not just the code. You can spot a bad UX from a mile away.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 dark:text-zinc-600 mt-1">→</span>
                <span><strong>High agency.</strong> You don&apos;t wait for instructions. If you see a problem, you fix it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 dark:text-zinc-600 mt-1">→</span>
                <span><strong>Long-term thinkers.</strong> We build systems that compound, not features that burn out in a month.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Think you&apos;re a fit?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Send us an email with a link to your GitHub, portfolio, or the last thing you built. Tell us why you want to build with Nx Conglo.
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=Open Application — Nx Conglo`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            Get in touch
            <span className="ml-2" aria-hidden>↗</span>
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