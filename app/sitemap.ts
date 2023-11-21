import { allProjects } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects', '/contact', '/blog'];

  allProjects.forEach(project => routes.push(`/projects/${project.slug}`));

  return routes.map(route => ({
    url: `https://riadh.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
}
