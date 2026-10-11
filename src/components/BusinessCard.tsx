import Image from "next/image";
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
  const Wrapper = business.url ? "a" : "div";
  const wrapperProps = business.url
    ? { href: business.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-2 ring-1 ring-slate-100">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${business.logo}`}
            alt={`${business.name} logo`}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[business.status]}`}
        >
          {statusLabels[business.status]}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
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
    </Wrapper>
  );
}