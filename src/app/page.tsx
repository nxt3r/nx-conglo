import { businesses } from "@/data/businesses";
import { site } from "@/data/site";
import BusinessCard from "@/components/BusinessCard";
import type { Metadata } from "next";
import BrandMark from "@/components/BrandMark";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Nx Conglo is an independent studio building web apps and digital services in public. Currently shipping Career OS (live) and Fixtional (beta).",
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
    Nx Conglo is an independent studio building web apps and digital
    services in public. Everything we ship lives here — one place to
    see what we&apos;re working on, what&apos;s live, and what&apos;s next.
  </p>
</section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5">
          <Stat value={String(site.stats.businesses)} label="Businesses" />
          <Stat value={String(site.stats.countries)} label="Country" />
          <Stat value={String(site.stats.appsLive)} label="App live" />
          <Stat value={String(site.stats.appsBeta)} label="In beta" />
          <Stat value={String(site.founded)} label="Founded" />
        </div>
      </section>

      {/* Businesses */}
      <section
        id="businesses"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
      >
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Businesses
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A growing portfolio of products built under the Nx Conglo banner.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-slate-200 bg-slate-50 scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Nx Conglo
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Nx Conglo is a solo-built studio founded in {site.founded}. We
            design and ship web apps in public — currently one live product
            and one in beta, with more on the way. Everything lives under one
            roof so you can see what we&apos;re building, testing, and
            launching.
          </p>
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