import type { Locale } from '../../lib/i18n';
export type EditorialSeries = 'decision-notebook' | 'after-the-click' | 'campaign-notes';
export type ArticleStatus = 'draft' | 'published';
export interface InsightArticle {
  id: string;
  locale: Locale;
  slug: string;
  translationGroupId: string;
  title: string;
  description: string;
  series: EditorialSeries;
  topics: string[];
  authorId: 'hussam-yassen';
  status: ArticleStatus;
  publishedAt?: string; // ISO editorial date, never populated from build time
  updatedAt?: string;
  body: string; // authored Markdown; future article template will render it
  cover?: {src:string;alt:string};
  references?: {title:string;url:string}[];
}
import articleRecords from './articles.json';
export const articles: InsightArticle[] = articleRecords as unknown as InsightArticle[]; // Stage 10: editorial-ready on unpublished site; public date not assigned.
export const publishedArticles = (locale:Locale) => articles.filter(a => a.locale===locale && a.status==='published' && Boolean(a.body.trim()));
export function readingMinutes(body:string):number {const words=body.replace(/[`*_#>\[\]()]/g,' ').trim().split(/\s+/u).filter(Boolean).length;return words?Math.max(1,Math.ceil(words/200)):0;}
export function translatedArticle(article:InsightArticle,locale:Locale){return articles.find(a=>a.translationGroupId===article.translationGroupId && a.locale===locale && a.status==='published');}
