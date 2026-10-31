import type { APIRoute } from 'astro';
import { readyRoutePaths } from '../config/readyRoutes';
import { site } from '../config/site';
const isPublic = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';
const escapeXml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const GET: APIRoute = () => {
  const paths = isPublic ? readyRoutePaths : [];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${escapeXml(new URL(path,site.canonicalOrigin).toString())}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' }});
};
