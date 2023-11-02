import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects', '/contact', '/blog'].map(route => ({
    url: `https://riadh.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
  return [...routes]
}
