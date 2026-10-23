import Link from "next/link";

export const metadata = {
  title: "Manifesto — Nx Conglo",
  description: "How Nx Conglo operates. Profitability over vanity metrics. Software as leverage.",
};

export default function ManifestoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">
        Manifesto
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-12">
        How we build.
      </h1>

      <div className="space-y-10 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Profitability over vanity metrics.</h2>
          <p>We measure success in revenue and staying power, not follower counts or funding announcements.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Software as leverage.</h2>
          <p>Code is our highest-leverage tool. We build systems that compound — not services that reset every month.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Small teams, big ownership.</h2>
          <p>We would rather have three people who own outcomes than thirty who own tickets.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Ship, then refine.</h2>
          <p>A live v0.1 teaches more than a perfect v3.0 on a whiteboard.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Boring infrastructure, exciting products.</h2>
          <p>The stack should be unremarkable so the product can be remarkable.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Built for the long term.</h2>
          <p>Nx Conglo is a holding company, not a sprint. Every venture is designed to outlast its founder&apos;s attention span.</p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <Link
          href="/"
          prefetch={false}
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
          ← Back to Nx Conglo
        </Link>
      </div>
    </div>
  );
}