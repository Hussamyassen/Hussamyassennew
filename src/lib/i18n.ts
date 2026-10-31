import { site } from '../config/site';
export const locales = ['ar', 'en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value:string):value is Locale => locales.includes(value as Locale);
export const direction = (locale:Locale):'rtl'|'ltr' => locale === 'ar' ? 'rtl' : 'ltr';
export const localePath = (locale:Locale, slug='') => `/${locale}/${slug.replace(/^\/+|\/+$/g,'')}${slug ? '/' : ''}`;
export const messages = {
 ar:{ whatsapp:'مرحباً حسام، وصلت إليك من موقعك وأرغب في مناقشة الحملات الإعلانية لنشاطي.', whatsappLabel:'تواصل على واتساب',callLabel:'اتصل بي',skip:'تخطَّ إلى المحتوى'},
 en:{ whatsapp:'Hello Hussam, I found your website and would like to discuss advertising campaigns for my business.',whatsappLabel:'Message on WhatsApp',callLabel:'Call me',skip:'Skip to content'},
 pt:{ whatsapp:'Olá Hussam, encontrei o seu site e gostaria de conversar sobre campanhas publicitárias para o meu negócio.',whatsappLabel:'Contactar pelo WhatsApp',callLabel:'Telefonar',skip:'Ir para o conteúdo'}
} as const;
export const whatsappHref = (locale:Locale) => `https://wa.me/${site.phoneE164.slice(1)}?text=${encodeURIComponent(messages[locale].whatsapp)}`;
export const equivalentLanguageLinks=(routes:Partial<Record<Locale,string>>) => locales.flatMap(locale=>routes[locale]?[{locale,href:routes[locale]}]:[]);
