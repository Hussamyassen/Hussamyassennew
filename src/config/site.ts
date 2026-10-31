export const site = {
  canonicalOrigin: 'https://husamyasen.com', // Planned domain; not live.
  names: { ar: 'حسام ياسين', en: 'Hussam Yassen', pt: 'Hussam Yassen' },
  phoneDisplay: '+971 52 611 9071',
  phoneE164: '+971526119071',
  linkedIn: 'https://www.linkedin.com/in/hussam-yassen',
  instagram: 'https://www.instagram.com/growthlab.ae/',
  defaultLocale: 'ar',
} as const;
export const telHref = `tel:${site.phoneE164}`;
export type ContactChannel = 'whatsapp' | 'phone';
export type ContactPlacement = 'hero' | 'section' | 'sticky' | 'footer' | 'other';
