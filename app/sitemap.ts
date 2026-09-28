import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
