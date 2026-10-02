import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://airdex.x010.tech' // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: baseUrl + '/sitemap.xml',
  }
}
