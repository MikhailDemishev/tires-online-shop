import { ADVANTAGES } from '@/widgets/Home/config';
import s from './Advantages.module.scss';
import clsx from 'clsx';
import { Section } from '@/shared/ui/Section/Section';
import { useTranslation } from '@/shared/lib/hooks';

export const Advantages = () => {
  const { t } = useTranslation();
  return (
    <Section
      className={s.homeAdvantages}
      title={t('pages.home.advantages.title')}
      hasWrapper
    >
      <ul className={s.advantages}>
        {ADVANTAGES.map(({ id, Icon, iconClassName, title, description }) => (
          <li key={id} className={s.advantageItem}>
            <Icon className={clsx(s.advantageIcon, s[iconClassName])} />
            <div className={s.advantageContent}>
              <h3 className={s.advantageTitle}>{t(title)}</h3>
              <p className={s.advantageDescription}>{t(description)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
