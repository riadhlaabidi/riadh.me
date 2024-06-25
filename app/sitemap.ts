import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/projects', '/contact', '/blog'].map(page => ({
    url: `https://riadh.me${page}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const projects = [
    {
      url: "https://riadh.me/projects/notification-service",
      lastModified: new Date("2023-11-17").toISOString().split('T')[0],
    },
    {
      url: "https://riadh.me/projects/riadh-me",
      lastModified: new Date().toISOString().split('T')[0],
    }
  ];

  const blogs = [
    {
      url: "https://riadh.me/blog/server-actions",
      lastModified: new Date("2024-01-23").toISOString().split('T')[0],
    },
  ];

  return [...pages, ...projects, ...blogs];
}
