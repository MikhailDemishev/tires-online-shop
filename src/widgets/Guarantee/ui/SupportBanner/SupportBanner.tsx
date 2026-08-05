import s from './SupportBanner.module.scss';
import { ROUTES } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner, type BannerLink } from '@/shared/ui/Banner';

export const SupportBanner = () => {
  const { t } = useTranslation();

  const links: BannerLink[] = [
    {
      to: ROUTES.contacts,
      linkName: t('general.links.contactUs'),
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
