// apps/frontend-temp/src/lib/get-dictionary.ts
import 'server-only';
import type { Locale } from '../../i18n-config';

// We need to use a type assertion here as TypeScript struggles with dynamic imports
// based on a variable type.
const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('../../public/locales/en/common.json').then((module) => module.default),
  es: () => import('../../public/locales/es/common.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const loadDictionary = dictionaries[locale] ?? dictionaries.en;
  return loadDictionary();
};
