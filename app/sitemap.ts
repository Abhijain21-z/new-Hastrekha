import type { MetadataRoute } from "next";
import { blogsData } from "@/lib/blogs-data";
import { zodiacData } from "@/lib/zodiac-data";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/palm-reading", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/zodiac", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/astrology-guide", priority: 0.7, changeFrequency: "monthly" },
  { path: "/search", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/editorial-policy", priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts = blogsData.map((blog) => ({
    url: absoluteUrl(`/blog/${blog.slug}`),
    lastModified: new Date(blog.updatedDate ?? blog.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [absoluteUrl(blog.imageUrl)],
  }));

  const signs = zodiacData.map((sign) => ({
    url: absoluteUrl(`/zodiac/${sign.id}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts, ...signs];
}
