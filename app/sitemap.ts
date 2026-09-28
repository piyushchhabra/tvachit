import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = blogPosts.reduce((latest, post) =>
    post.dateModified > latest ? post.dateModified : latest
  , blogPosts[0]?.dateModified ?? new Date().toISOString().slice(0, 10));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(latestPost),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(latestPost),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${siteConfig.url}${post.image}`],
    })),
  ];
}
