import { site } from '../config/site';
import type { Locale } from './i18n';
export interface SeoInput {
  locale: Locale;
  title: string;
  description: string;
  pathname: string;
  /** Only *published and equivalent* alternate routes. */
  alternates?: Partial<Record<Locale, string>>;
  indexable?: boolean;
}
export const absoluteUrl = (pathname: string) => new URL(pathname, site.canonicalOrigin).toString();
export function seoFor(input: SeoInput) {
  const productionOptIn = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';
  return {
    ...input,
    canonical: absoluteUrl(input.pathname),
    alternates: Object.entries(input.alternates ?? {}).map(([lang, path]) => ({ lang, href: absoluteUrl(path) })),
    robots: productionOptIn && input.indexable ? 'index,follow' : 'noindex,nofollow',
  };
}
