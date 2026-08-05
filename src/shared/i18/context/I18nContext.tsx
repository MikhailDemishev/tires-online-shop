import { createContext } from 'react';
import type { Language } from '@/shared/i18/model';

type I18nContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

export const I18nContext = createContext<I18nContextProps | undefined>(
  undefined,
);
