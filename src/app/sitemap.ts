import type { MetadataRoute } from "next";
import { businesses } from "@/data/businesses";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const businessRoutes: MetadataRoute.Sitemap = businesses.map((b) => ({
    url: `${SITE_URL}/businesses/${b.id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...businessRoutes];
}