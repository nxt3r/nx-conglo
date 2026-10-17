import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ventures, getVenture } from "@/data/ventures";

const statusStyles: Record<string, string> = {
  live: "bg-emerald-100 text-emerald-800",
  "coming-soon": "bg-slate-200 text-slate-700",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
};

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
  
  // Add the "return {}" on the next line here:
  if (!venture) return {};

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
      images: [
        {
          url: venture.logo,
          alt: `${venture.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${venture.name} — ${venture.tagline}`,
      description: venture.description,
      images: [venture.logo],
    },
  };
}

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
    <div className="pb-20">
      {/* Top Nav Link */}
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <Link
          href="/#ventures"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <span aria-hidden>←</span> Back to ventures
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pt-8">
        {/* Logo Box */}
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

        {/* Title & Status */}
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
        
        {/* Styled Tagline (Option 2) */}
        <p className="mt-4 text-xl font-medium tracking-tight text-slate-600">
          {venture.tagline}
        </p>
      </section>

      {/* Long-Form Content Section */}
      <section className="mx-auto max-w-4xl px-6 mt-16">
        
        {/* "About" Divider */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            About the venture
          </h2>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        {/* Content Blocks */}
        <div className="max-w-none">
          {/* Optional: Show the short description here as an intro paragraph if you want, 
              but since you have rich content now, we can just render the blocks. */}
          <p className="mb-6 text-lg leading-relaxed text-slate-800 font-medium">
            {venture.description}
          </p>

          {venture.content.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p key={i} className="mb-6 text-lg leading-relaxed text-slate-600">
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h3 key={i} className="mt-10 mb-4 text-2xl font-bold tracking-tight text-slate-900">
                  {block.text}
                </h3>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="mb-6 list-disc pl-6 text-lg text-slate-600">
                  {block.items.map((item, j) => (
                    <li key={j} className="mb-2">{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Footer: Tags & Visit Button */}
      <section className="mx-auto max-w-4xl px-6 mt-16 pt-10 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {venture.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Visit Button */}
          {venture.url && (
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 whitespace-nowrap"
            >
              Visit {venture.name}
              <span aria-hidden>↗</span>
            </a>
          )}
          
        </div>
      </section>
    </div>
  );
}