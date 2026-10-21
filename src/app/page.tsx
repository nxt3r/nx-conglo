import { ventures } from "@/data/ventures";
import { site } from "@/data/site";
import VentureCard from "@/components/VentureCard";
import BrandMark from "@/components/BrandMark";
import ContentRenderer from "@/components/ContentRenderer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description:
    "Nx Conglo is an independent studio building web apps and digital services in public. Currently shipping three live ventures.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <BrandMark size={64} className="mb-6" />
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
          {site.name} · Est. {site.founded}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
        Nx Conglo is an independent organization developing products, projects, and businesses across industries.
        Each has its own identity, with the freedom to grow in its own direction.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          <Stat value={String(site.stats.ventures)} label="Ventures" />
          <Stat value={String(site.stats.countries)} label="Country" />
          <Stat value={String(site.stats.comingSoon)} label="Coming Soon" />
          <Stat value={String(site.founded)} label="Founded" />
        </div>
      </section>

      {/* Ventures */}
      <section
        id="ventures"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Ventures
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A growing portfolio of ventures built under the Nx Conglo banner.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-slate-200 bg-slate-50 scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            
            {/* Sticky Sidebar */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                About Nx Conglo
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                The Umbrella behind the ventures.
              </p>
            </div>

            {/* Scrolling Content */}
            <div>
              <ContentRenderer blocks={site.about} layout="sidebar" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
}