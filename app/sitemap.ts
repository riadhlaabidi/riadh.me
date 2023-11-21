import { allProjects } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/projects', '/contact', '/blog'].map(page => ({
    url: `https://riadh.me${page}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const projects = allProjects.map(project => ({
    url: `https://riadh.me/projects/${project.slug}`,
    lastModified: new Date(project.lastModified).toISOString().split('T')[0],
  }));

  return [...pages, ...projects];
}
