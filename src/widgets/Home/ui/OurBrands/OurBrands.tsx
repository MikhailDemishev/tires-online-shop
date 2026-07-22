import { Section } from '@/shared/ui/Section/Section';
import s from './OurBrands.module.scss';
import { BRANDS } from '@/widgets/Home/config';

export const OurBrands = () => {
  return (
    <Section title="бренды" className={s.brands}>
      <ul className={s.brandsList}>
        {BRANDS.map(({ id, Icon }) => (
          <li key={id} className={s.brandItem}>
            <Icon className={s.brandIcon} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
