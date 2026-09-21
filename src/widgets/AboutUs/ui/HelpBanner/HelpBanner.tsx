import { useAppDispatch } from '@/app/store';
import s from './HelpBanner.module.scss';
import { ROUTES } from '@/app/router';
import { helpBanner } from '@/assets/images';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner, type BannerLink } from '@/shared/ui/Banner';
import { openModal } from '@/app/store/slices';

export const HelpBanner = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const links: BannerLink[] = [
    {
      to: ROUTES.tires,
      linkName: t('general.links.toCatalog'),
    },
    {
      linkName: t('general.links.contactUs'),
      btnVariant: 'secondary',
      onClick: () => {
        dispatch(openModal({ type: 'SupportRequest' }));
      },
    },
  ];

  return (
    <Banner
      className={s.helpBanner}
      bannerTitle={t('pages.aboutUs.helpBanner.title')}
      contentClassName={s.helpBannerContent}
      links={links}
      image={<img src={helpBanner} alt="" />}
      imageClassName={s.helpBannerImg}
    >
      <></>
    </Banner>
  );
};
