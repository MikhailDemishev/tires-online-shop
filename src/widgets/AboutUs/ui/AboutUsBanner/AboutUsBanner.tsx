import { Banner } from '@/shared/ui/Banner';
import s from './AboutUsBanner.module.scss';
import { ROUTES } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';

type GuaranteeBannerProps = {
  pageTitle: string;
};

export const AboutUsBanner = ({ pageTitle }: GuaranteeBannerProps) => {
  const { t } = useTranslation();
  return (
    <Banner
      bannerTitle={t('pages.aboutUs.aboutUsBanner.title')}
      links={[
        {
          to: ROUTES.tires,
          linkName: t('general.links.toCatalog'),
        },
      ]}
      breadcrumbs={[
        { label: t('pages.home.title'), to: '/' },
        { label: t(pageTitle) },
      ]}
      className={s.aboutUsBanner}
    >
      <>
        <span>{t('pages.aboutUs.aboutUsBanner.descriptionLine1')} </span>
        <span>{t('pages.aboutUs.aboutUsBanner.descriptionLine2')} </span>
      </>
    </Banner>
  );
};
