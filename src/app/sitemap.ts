import type { MetadataRoute } from "next";
import { articles } from "@/data/wiki";
import { siteUrl, reviewedAt } from "@/data/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: reviewedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/wiki/${article.slug}/`,
      lastModified: reviewedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
