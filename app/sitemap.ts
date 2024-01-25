import { MetadataRoute } from 'next';
import { getBlogPosts, getProjects } from './db/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/projects', '/contact', '/blog'].map(page => ({
    url: `https://riadh.me${page}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const projects = getProjects().map(project => ({
    url: `https://riadh.me/projects/${project.slug}`,
    lastModified: new Date(project.metadata.lastModified)
      .toISOString()
      .split('T')[0],
  }));

  const blogPosts = getBlogPosts().map(post => ({
    url: `https://riadh.me/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt)
      .toISOString()
      .split('T')[0],
  }));

  return [...pages, ...projects, ...blogPosts];
}
