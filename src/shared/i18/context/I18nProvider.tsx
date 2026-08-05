import { useState, type ReactNode } from 'react';
import { I18nContext } from './I18nContext';
import type { Language, TranslationNode } from '@/shared/i18/model';
import { defaultLanguage } from '@/shared/i18/config';
import { translations } from '@/shared/i18/translations';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: string) => {
    const keys = key.split('.');
    let result: TranslationNode | undefined = translations[language];
    for (const k of keys) {
      if (typeof result === 'object' && result !== null) {
        result = (result as Record<string, TranslationNode>)[k];
      } else {
        result = undefined;
      }
      if (result === undefined) break;
    }
    return typeof result === 'string' ? result : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};
