import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center px-6 py-32 bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
          Venture not found
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 transition-colors duration-300">
          That page doesn&apos;t exist — or hasn&apos;t launched yet.
        </p>
        <Link
          href="/#ventures"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200"
        >
          ← Back to ventures
        </Link>
      </div>
    </div>
  );
}