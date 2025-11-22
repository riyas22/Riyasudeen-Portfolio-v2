import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://riyasudeen.me';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: disallow private paths
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}