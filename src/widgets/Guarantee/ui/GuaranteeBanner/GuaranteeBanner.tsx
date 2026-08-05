import s from './GuaranteeBanner.module.scss';
import { ROUTES } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner } from '@/shared/ui/Banner';

type GuaranteeBannerProps = {
  pageTitle: string;
};

export const GuaranteeBanner = ({ pageTitle }: GuaranteeBannerProps) => {
  const { t } = useTranslation();
  return (
    <Banner
      className={s.guaranteeBanner}
      bannerTitle={t('pages.guarantee.guaranteeBanner.title')}
      contentClassName={s.guaranteeBannerContent}
      breadcrumbs={[
        { label: t('pages.home.title'), to: '/' },
        { label: t(pageTitle) },
      ]}
      links={[
        {
          to: ROUTES.tires,
          linkName: t('general.links.toCatalog'),
        },
      ]}
    >
      <>
        <span>{t('pages.guarantee.guaranteeBanner.descriptionLine1')}</span>
        <span>{t('pages.guarantee.guaranteeBanner.descriptionLine2')}</span>
      </>
    </Banner>
  );
};
