import s from './GuaranteeBanner.module.scss';
import { ROUTES } from '@/app/router';
import { Banner } from '@/shared/ui/Banner';

type GuaranteeBannerProps = {
  pageTitle: string;
};

export const GuaranteeBanner = ({ pageTitle }: GuaranteeBannerProps) => {
  return (
    <Banner
      className={s.guaranteeBanner}
      bannerTitle="гарантии качества"
      contentClassName={s.guaranteeBannerContent}
      breadcrumbs={[{ label: 'Главная', to: '/' }, { label: pageTitle }]}
      links={[
        {
          to: ROUTES.tires,
          linkName: 'перейти в каталог',
        },
      ]}
    >
      <>
        <span>Официальная гарантия производителей,</span>
        <span>30 дней на возврат и поддержка специалистов 4x4.</span>
      </>
    </Banner>
  );
};
