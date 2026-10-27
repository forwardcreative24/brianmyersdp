import { getCollection } from 'astro:content';

// Every page, for search engines. Rebuilds itself from the project files.
export async function GET({ site }) {
  const projects = await getCollection('projects');
  const paths = ['/', '/work/', '/about/', '/gear/', '/contact/', ...projects.map((p) => `/work/${p.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
