import { useCallback, useContext, useEffect } from 'react';

import { defaultLanguage } from '@/shared/i18/config';
import { I18nContext } from '@/shared/i18/context/I18nContext';
import type { Language } from '@/shared/i18/model';

const LANGUAGE_KEY = 'language';

const SUPPORTED_LANGUAGES: Language[] = ['pl', 'en', 'ru'];

export const useTranslation = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }

  const { language, setLanguage: setContextLanguage, t } = context;

  const getValidLanguage = useCallback((value: string): Language => {
    return SUPPORTED_LANGUAGES.includes(value as Language)
      ? (value as Language)
      : defaultLanguage;
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

    if (!savedLanguage) return;

    const validLanguage = getValidLanguage(savedLanguage);

    if (validLanguage !== language) {
      setContextLanguage(validLanguage);
    }
  }, [getValidLanguage, language, setContextLanguage]);

  const setLanguage = (value: string) => {
    const validLanguage = getValidLanguage(value);

    localStorage.setItem(LANGUAGE_KEY, validLanguage);
    setContextLanguage(validLanguage);
  };

  return {
    t,
    language,
    setLanguage,
  };
};
