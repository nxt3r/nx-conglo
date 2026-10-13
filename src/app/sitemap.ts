import type { MetadataRoute } from "next";
import { ventures } from "@/data/ventures";
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

  const ventureRoutes: MetadataRoute.Sitemap = ventures.map((v) => ({
    url: `${SITE_URL}/ventures/${v.id}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...ventureRoutes];
}