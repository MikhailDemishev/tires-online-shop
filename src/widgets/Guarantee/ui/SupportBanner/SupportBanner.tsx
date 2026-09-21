import s from './SupportBanner.module.scss';
import { ROUTES } from '@/app/router';
import { useAppDispatch } from '@/app/store';
import { openModal } from '@/app/store/slices';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner, type BannerLink } from '@/shared/ui/Banner';

export const SupportBanner = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const links: BannerLink[] = [
    {
      linkName: t('general.links.contactUs'),
      onClick: () => {
        dispatch(openModal({ type: 'SupportRequest' }));
      },
    },
    {
      to: ROUTES.tires,
      linkName: t('general.links.toCatalog'),
      btnVariant: 'secondary',
    },
  ];

  return (
    <Banner
      className={s.supportBanner}
      bannerTitle={t('pages.guarantee.supportBanner.title')}
      contentClassName={s.supportBannerContent}
      links={links}
    >
      <>
        <span>{t('pages.guarantee.supportBanner.descriptionLine1')}</span>
        <span>{t('pages.guarantee.supportBanner.descriptionLine2')}</span>
      </>
    </Banner>
  );
};
