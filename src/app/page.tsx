import { businesses } from "@/data/businesses";
import BusinessCard from "@/components/BusinessCard";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Building businesses that matter.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
          Nx Conglo is a group of companies and web apps working together. We
          build, operate, and grow a portfolio of digital businesses — and this
          site is where you can find all of them in one place.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          <Stat value="6" label="Businesses" />
          <Stat value="3" label="Countries" />
          <Stat value="12" label="Apps shipped" />
          <Stat value="2024" label="Founded" />
        </div>
      </section>

      {/* Businesses */}
      <section className="mx-auto max-w-6xl px-6 py-20">
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
    </main>
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