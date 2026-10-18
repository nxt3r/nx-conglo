import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ventures, getVenture } from "@/data/ventures";
import ContentRenderer from "@/components/ContentRenderer";

type Params = { id: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return ventures.map((v) => ({ id: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const venture = getVenture(id);
  if (!venture) return { title: "Not found" };

  const url = `/ventures/${venture.id}`;

  return {
    title: venture.name,
    description: venture.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${venture.name} — ${venture.tagline}`,
      description: venture.description,
      url,
      images: [{ url: venture.logo, alt: `${venture.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${venture.name} — ${venture.tagline}`,
      description: venture.description,
      images: [venture.logo],
    },
  };
}

const statusStyles: Record<string, string> = {
  live: "bg-emerald-100 text-emerald-800",
  "coming-soon": "bg-slate-200 text-slate-700",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
};

export default async function VenturePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const venture = getVenture(id);
  if (!venture) notFound();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <Link
          href="/#ventures"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <span aria-hidden>←</span> Back to ventures
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-8 pb-16">
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
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[venture.status]}`}
          >
            {statusLabels[venture.status]}
          </span>
          <span className="text-sm text-slate-500">
            Launched {venture.year}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {venture.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-slate-500">
          {venture.tagline}
        </p>

        {/* Content */}
        <div className="mt-10">
          <ContentRenderer blocks={venture.content} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {venture.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {venture.url && (
          <div className="mt-12 border-t border-slate-200 pt-8">
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Visit {venture.name}
              <span aria-hidden>↗</span>
            </a>
          </div>
        )}
      </section>
    </div>
  );
}