import { site } from '../config/site';
import { getWork } from '../content/work';
import type { Locale } from './i18n';
export type InquiryType='general'|'management'|'review'|'consultation';
export function workWhatsApp(locale:Locale, type:InquiryType='general') {
 return `https://wa.me/${site.phoneE164.slice(1)}?text=${encodeURIComponent(getWork(locale).inquiries[type])}`;
}
