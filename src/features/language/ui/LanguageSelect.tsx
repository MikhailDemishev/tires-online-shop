import { Select } from '@/shared/ui/Select';
import { LANGUAGE_OPTIONS } from '@/features/language/config';
import s from './LanguageSelect.module.scss';
import { useTranslation } from '@/shared/lib/hooks';
import type { Language } from '@/shared/i18/model';
import clsx from 'clsx';

type LanguageSelectProps = {
  className?: string;
};

export const LanguageSelect = ({ className }: LanguageSelectProps) => {
  const { language, setLanguage } = useTranslation();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };
  return (
    <Select
      options={LANGUAGE_OPTIONS}
      name="sort"
      value={language}
      wrapperClassName={clsx(className, s.languageSelectWrapper)}
      className={s.languageSelect}
      optionClassName={s.languageSelectOption}
      noIcon
      onChange={handleLanguageChange}
    />
  );
};
