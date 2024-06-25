import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://riadh.me/sitemap.xml',
    host: 'https://riadh.me',
  }
}
