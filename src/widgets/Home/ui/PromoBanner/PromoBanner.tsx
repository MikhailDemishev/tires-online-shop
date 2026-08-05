import s from './PromoBanner.module.scss';
import { ROUTES } from '@/app/router';
import { useTranslation } from '@/shared/lib/hooks';
import { Banner } from '@/shared/ui/Banner';

export const PromoBanner = () => {
  const { t } = useTranslation();
  return (
    <Banner
      bannerTitle={t('pages.home.guaranteeBanner.title')}
      links={[
        {
          to: ROUTES.guarantee,
          linkName: t('general.links.learnMore'),
        },
      ]}
      className={s.promoBanner}
      contentClassName={s.promoBannerContent}
    >
      <>
        <span>{t('pages.home.guaranteeBanner.text1')}</span>
        <span>{t('pages.home.guaranteeBanner.text2')}</span>
      </>
    </Banner>
  );
};
