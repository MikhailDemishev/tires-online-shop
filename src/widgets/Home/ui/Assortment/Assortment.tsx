import s from './Assortment.module.scss';
import { Section } from '@/shared/ui/Section/Section';
import { protectors } from '@/shared/config';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router';
import { Mountain } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';

export const Assortment = () => {
  const protectorsSamples = protectors.slice(0, 4);
  const { t } = useTranslation();

  return (
    <Section
      className={s.homeAssortment}
      title={t('pages.home.assortment.title')}
      hasWrapper
    >
      <ul className={s.protectors}>
        {protectorsSamples.map(({ id, name, image }) => (
          <li key={id} className={s.protectorItem}>
            <Link
              className={s.protectorLink}
              to={`${ROUTES.tires}?protector=${encodeURIComponent(name)}`}
            >
              <img
                src={image}
                alt={`Bieżnik opony ${name}`}
                className={s.protectorImage}
              />
              <div className={s.protectorContent}>
                <h3 className={s.protectorTitle}>{name}</h3>
                <div className={s.protectorBadges}>
                  <span className={s.protectorBadge}>
                    <span className={s.protectorBadgeText}>M+S</span>
                  </span>
                  <span className={s.protectorBadge}>
                    <Mountain className={s.protectorIcon} />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};
