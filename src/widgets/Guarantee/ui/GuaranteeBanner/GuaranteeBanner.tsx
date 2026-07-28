import s from './GuaranteeBanner.module.scss';
import { ROUTES } from '@/app/router';
import { Banner } from '@/shared/ui/Banner';

export const GuaranteeBanner = () => {
  return (
    <Banner
      to={ROUTES.tires}
      className={s.guaranteeBanner}
      bannerTitle="гарантии качества"
      linkName="перейти в каталог"
      contentClassName={s.guaranteeBannerContent}
    >
      <>
        <span>Официальная гарантия производителей,</span>
        <span>30 дней на возврат и поддержка специалистов 4x4.</span>
      </>
    </Banner>
  );
};
