import Image from "next/image";
import Link from "next/link";
import type { Business } from "@/data/businesses";

const statusStyles: Record<Business["status"], string> = {
  live: "bg-emerald-100 text-emerald-800",
  beta: "bg-amber-100 text-amber-800",
  "coming-soon": "bg-slate-200 text-slate-700",
};

const statusLabels: Record<Business["status"], string> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export default function BusinessCard({ business }: { business: Business }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <Link
      href={`/businesses/${business.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      {/* 16:9 logo banner */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-inset ring-slate-100">
        <Image
          src={`${basePath}${business.logo}`}
          alt={`${business.name} logo`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition group-hover:scale-[1.02]"
        />
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[business.status]}`}
        >
          {statusLabels[business.status]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {business.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-500">
          {business.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {business.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {business.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-slate-900">
          Learn more
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}