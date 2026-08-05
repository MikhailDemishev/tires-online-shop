import { Section } from '@/shared/ui/Section/Section';
import { GUARANTEE_BRANDS } from '../../config';
import s from './GuaranteeBrands.module.scss';
import { useTranslation } from '@/shared/lib/hooks';

export const GuaranteeBrands = () => {
  const { t } = useTranslation();
  return (
    <Section
      className={s.guaranteeBrands}
      title={t('pages.guarantee.guaranteeBrands.title')}
    >
      <ul className={s.guaranteeBrandsList}>
        {GUARANTEE_BRANDS.map(({ id, icon: Icon, text }) => (
          <li key={id} className={s.guaranteeBrandsItem}>
            <span className={s.guaranteeBrandsIcon}>
              <Icon />
            </span>
            <p className={s.guaranteeBrandsText}>{t(text)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
