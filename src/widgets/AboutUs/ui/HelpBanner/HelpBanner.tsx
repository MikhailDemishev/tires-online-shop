import s from './HelpBanner.module.scss';
import { ROUTES } from '@/app/router';
import { helpBanner } from '@/assets/images';
import { Banner, type BannerLink } from '@/shared/ui/Banner';

export const HelpBanner = () => {
  const links: BannerLink[] = [
    {
      to: ROUTES.tires,
      linkName: 'перейти в каталог',
    },
    {
      to: ROUTES.contacts,
      linkName: 'связаться с нами',
      btnVariant: 'secondary',
    },
  ];

  return (
    <Banner
      className={s.helpBanner}
      bannerTitle="Мы поможем подобрать идеальный комплект для вашего автомобиля"
      contentClassName={s.helpBannerContent}
      links={links}
      image={<img src={helpBanner} className="" alt="" />}
      imageClassName={s.helpBannerImg}
    >
      <></>
    </Banner>
  );
};
