import s from './PromoBanner.module.scss';
import { ROUTES } from '@/app/router';
import { Banner } from '@/shared/ui/Banner';

export const PromoBanner = () => {
  const to = ROUTES.guarantee;
  return (
    <Banner
      bannerTitle="Гарантия качества"
      linkName="подробнее"
      to={to}
      className={s.promoBanner}
    >
      <>
        <span>Официальная гарантия производителей,</span>
        <span>30 дней на возврат и поддержка специалистов 4x4.</span>
      </>
    </Banner>
  );
};
