import { createContext } from 'react';

import type { Language, TranslationNode } from '@/shared/i18/model';

type I18nContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tObject: <T extends TranslationNode>(key: string) => T | undefined;
};

export const I18nContext = createContext<I18nContextProps | undefined>(
  undefined,
);
