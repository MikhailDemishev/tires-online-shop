import type { Language } from '@/shared/i18/model';

type LanguageOption = {
  value: Language;
  label: string;
};

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: 'pl', label: 'PL' },
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];
