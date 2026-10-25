import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog"); // Changed from NOTES_DIR

export type BlogFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  published?: boolean;
};

export type BlogMeta = BlogFrontmatter & {
  slug: string;
  readingTime: number;
};

export type BlogPost = BlogMeta & {
  html: string;
};

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogMeta[] {
  const slugs = getAllSlugs();

  const posts: BlogMeta[] = slugs
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, `${slug}.md`);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      const fm = data as BlogFrontmatter;

      return {
        slug,
        title: fm.title,
        date: fm.date,
        excerpt: fm.excerpt,
        tags: fm.tags ?? [],
        published: fm.published ?? true,
        readingTime: estimateReadingTime(content),
      };
    })
    .filter((n) => n.published !== false);

  // Newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    slug,
    title: fm.title,
    date: fm.date,
    excerpt: fm.excerpt,
    tags: fm.tags ?? [],
    published: fm.published ?? true,
    readingTime: estimateReadingTime(content),
    html: htmlContent,
  };
}