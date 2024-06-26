import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: "/",
        disallow: ['/files/', '/og*'],
      },
      {
        userAgent: 'AdsBot-Google',
        disallow: '/',
      },
      {
        userAgent: '*',
        disallow: '/'
      }
    ],
    sitemap: [
      'https://riadh.me/sitemap.xml',
      'https://www.riadh.me/sitemap.xml'
    ],
  }
}
