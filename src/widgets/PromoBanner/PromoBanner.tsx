import { Link } from 'react-router-dom';
import s from './PromoBanner.module.scss';
import { ROUTES } from '@/app/router';

export const PromoBanner = () => {
  return (
    <section className={s.promoBanner}>
      <div className="container">
        <div className={s.promoBannerContent}>
          <h2 className={s.promoBannerTitle}>гарантия качества</h2>
          <p className={s.promoBannerDescription}>
            <span>Официальная гарантия производителей,</span>
            <span>30 дней на возврат и поддержка специалистов 4x4.</span>
          </p>
          <Link to={ROUTES.guarantee} className={s.promoBannerLink}>
            подробнее
          </Link>
        </div>
      </div>
    </section>
  );
};
