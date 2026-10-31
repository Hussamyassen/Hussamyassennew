import type { APIRoute } from 'astro';
const isPublic = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';
export const GET: APIRoute = () => new Response(
  isPublic
    ? `User-agent: *\nAllow: /\nSitemap: https://husamyasen.com/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
);
