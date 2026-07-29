import s from './SupportBanner.module.scss';
import { ROUTES } from '@/app/router';
import { Banner, type BannerLink } from '@/shared/ui/Banner';

export const SupportBanner = () => {
  const links: BannerLink[] = [
    {
      to: ROUTES.contacts,
      linkName: 'связаться с нами',
    },
    {
      to: ROUTES.tires,
      linkName: 'перейти в каталог',
      btnVariant: 'secondary',
    },
  ];

  return (
    <Banner
      className={s.supportBanner}
      bannerTitle="остались вопросы?"
      contentClassName={s.supportBannerContent}
      links={links}
    >
      <>
        <span>Поможем разобраться с гарантией, возвратом</span>
        <span>и совместимостью товаров</span>
      </>
    </Banner>
  );
};
