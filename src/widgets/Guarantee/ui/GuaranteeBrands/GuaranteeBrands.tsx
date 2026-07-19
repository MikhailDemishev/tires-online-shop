import { Section } from '@/shared/ui/Section/Section';
import { GUARANTEE_BRANDS } from '../../config';
import s from './GuaranteeBrands.module.scss';

export const GuaranteeBrands = () => {
  return (
    <Section className={s.guaranteeBrands} title="гарантия брендов">
      <ul className={s.guaranteeBrandsList}>
        {GUARANTEE_BRANDS.map(({ id, icon: Icon, text }) => (
          <li key={id} className={s.guaranteeBrandsItem}>
            <span className={s.guaranteeBrandsIcon}>
              <Icon />
            </span>
            <p className={s.guaranteeBrandsText}>{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
