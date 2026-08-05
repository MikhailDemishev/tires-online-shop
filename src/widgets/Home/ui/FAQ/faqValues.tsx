import { CloseIcon } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';

import s from './FAQ.module.scss';

export const useFaqAccordionItems = () => {
  const { t } = useTranslation();

  return [
    {
      value: 'manufacturer',
      header: (
        <span className={s.faqAccordionHeader}>
          <span className={s.faqAccordionTitle}>
            {t('pages.home.faq.manufacturer.question')}
          </span>
          <CloseIcon className={s.faqAccordionIcon} />
        </span>
      ),
      children: (
        <p className={s.faqAccordionText}>
          {t('pages.home.faq.manufacturer.answer')}
        </p>
      ),
    },
    {
      value: 'retreaded',
      header: (
        <span className={s.faqAccordionHeader}>
          <span className={s.faqAccordionTitle}>
            {t('pages.home.faq.retreaded.question')}
          </span>
          <CloseIcon className={s.faqAccordionIcon} />
        </span>
      ),
      children: (
        <p className={s.faqAccordionText}>
          {t('pages.home.faq.retreaded.answer')}
        </p>
      ),
    },
    {
      value: 'difference',
      header: (
        <span className={s.faqAccordionHeader}>
          <span className={s.faqAccordionTitle}>
            {t('pages.home.faq.difference.question')}
          </span>
          <CloseIcon className={s.faqAccordionIcon} />
        </span>
      ),
      children: (
        <p className={s.faqAccordionText}>
          {t('pages.home.faq.difference.answer')}
        </p>
      ),
    },
    {
      value: 'types',
      header: (
        <span className={s.faqAccordionHeader}>
          <span className={s.faqAccordionTitle}>
            {t('pages.home.faq.types.question')}
          </span>
          <CloseIcon className={s.faqAccordionIcon} />
        </span>
      ),
      children: (
        <>
          <p className={s.faqAccordionText}>
            {t('pages.home.faq.types.intro')}
          </p>

          <ul className={s.faqAccordionList}>
            <li className={s.faqAccordionListItem}>
              <p className={s.faqAccordionText}>
                <span className={s.accent}>
                  {t('pages.home.faq.types.mudTerrain.title')}
                </span>{' '}
                {t('pages.home.faq.types.mudTerrain.description')}
              </p>
            </li>

            <li className={s.faqAccordionListItem}>
              <p className={s.faqAccordionText}>
                <span className={s.accent}>
                  {t('pages.home.faq.types.allTerrain.title')}
                </span>{' '}
                {t('pages.home.faq.types.allTerrain.description')}
              </p>
            </li>
          </ul>

          <p className={s.faqAccordionText}>
            {t('pages.home.faq.types.outro')}
          </p>
        </>
      ),
    },
    {
      value: 'size',
      header: (
        <span className={s.faqAccordionHeader}>
          <span className={s.faqAccordionTitle}>
            {t('pages.home.faq.size.question')}
          </span>
          <CloseIcon className={s.faqAccordionIcon} />
        </span>
      ),
      children: (
        <p className={s.faqAccordionText}>{t('pages.home.faq.size.answer')}</p>
      ),
    },
    {
      value: 'installation',
      header: (
        <span className={s.faqAccordionHeader}>
          <span className={s.faqAccordionTitle}>
            {t('pages.home.faq.installation.question')}
          </span>
          <CloseIcon className={s.faqAccordionIcon} />
        </span>
      ),
      children: (
        <p className={s.faqAccordionText}>
          {t('pages.home.faq.installation.answer')}
        </p>
      ),
    },
  ];
};
