import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog"; // Changed import

export const metadata: Metadata = {
  title: "Blog — Nx Conglo",
  description:
    "Field notes, essays, and changelogs from the Nx Conglo build process.",
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts(); // Changed variable

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-8 py-24 md:py-32">
        <Link
          href="/"
          prefetch={false}
          className="mb-12 inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
        >
          ← Back to Nx Conglo
        </Link>

        <header className="mb-12 border-b border-gray-200 dark:border-zinc-800 pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-zinc-500">
            INSIGHTS & PERSPECTIVES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ideas, strategy, and the work behind them.
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-zinc-400">
            Thoughtful perspectives on building ventures, developing ideas, and creating lasting value.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-zinc-500">
            Nothing published yet. Check back soon.
          </p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`} // Changed route
                  className="group block rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 transition-all hover:border-gray-300 dark:hover:border-zinc-700 hover:shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-zinc-400">
                    {post.excerpt}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 dark:border-zinc-800 px-2.5 py-0.5 text-xs text-gray-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}