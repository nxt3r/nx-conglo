import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog"; // Changed imports

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // Changed variable
  if (!post) return { title: "Post Not Found — Nx Conglo" };

  return {
    title: `${post.title} — Nx Conglo`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // Changed variable
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <article className="mx-auto max-w-2xl px-8 py-24 md:py-32">

              {/* Top Sub-back button */}
        <Link
          href="/blog"
          prefetch={false}
          className="mb-10 inline-flex items-center text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to all posts
        </Link>

        <header className="mb-12">
          <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-zinc-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-zinc-400">
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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
        </header>

        <div
          className="prose prose-gray dark:prose-invert max-w-none
            prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-zinc-300
            prose-a:text-slate-900 dark:prose-a:text-white prose-a:underline prose-a:underline-offset-4
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-zinc-700
            prose-blockquote:text-gray-600 dark:prose-blockquote:text-zinc-400
            prose-code:text-slate-900 dark:prose-code:text-white
            prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="mt-16 border-t border-gray-200 dark:border-zinc-800 pt-8">
          <Link
            href="/blog" 
            prefetch={false}
            className="inline-flex items-center text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </main>
  );
}