import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { businesses, getBusiness } from "@/data/businesses";

type Params = { id: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return businesses.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const business = getBusiness(id);
  if (!business) return { title: "Not found" };

  const url = `/businesses/${business.id}`;

  return {
    title: business.name, // template renders "Career OS · Nx Conglo"
    description: business.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${business.name} — ${business.tagline}`,
      description: business.description,
      url,
      images: [
        {
          url: business.logo, // logo becomes the OG image
          alt: `${business.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${business.name} — ${business.tagline}`,
      description: business.description,
      images: [business.logo],
    },
  };
}

const statusStyles: Record<string, string> = {
  live: "bg-emerald-100 text-emerald-800",
  beta: "bg-amber-100 text-amber-800",
  "coming-soon": "bg-slate-200 text-slate-700",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export default async function BusinessPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const business = getBusiness(id);
  if (!business) notFound();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <Link
          href="/#businesses"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <span aria-hidden>←</span> Back to businesses
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-inset ring-slate-100">
          <Image
            src={`${basePath}${business.logo}`}
            alt={`${business.name} logo`}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain p-10"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[business.status]}`}
          >
            {statusLabels[business.status]}
          </span>
          <span className="text-sm text-slate-500">
            Launched {business.year}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {business.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-500">
          {business.tagline}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-700">
          {business.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {business.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {business.url && (
          <div className="mt-10">
            <a
              href={business.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Visit {business.name}
              <span aria-hidden>↗</span>
            </a>
          </div>
        )}
      </section>
    </div>
  );
}