import { ABOUT_STATS, aboutImages } from '@/widgets/AboutUs/config';
import s from './AboutOverview.module.scss';
import { useTranslation } from '@/shared/lib/hooks';

export const AboutOverview = () => {
  const { t } = useTranslation();
  return (
    <section className={s.aboutOverview}>
      <div className="container">
        <h2 className="visuallyHidden">
          {t('pages.aboutUs.aboutUsOverview.mainTitle')}
        </h2>

        <div className={s.aboutOverviewWrapper}>
          <div className={s.aboutOverviewLeft}>
            <div className={s.aboutOverviewInfo}>
              <h3 className={s.aboutOverviewTitle}>
                {t('pages.aboutUs.aboutUsOverview.title')}
              </h3>
              <p className={s.aboutOverviewDescription}>
                {t('pages.aboutUs.aboutUsOverview.description')}
              </p>
            </div>
            <ul className={s.aboutOverviewGallery}>
              {aboutImages.map(({ src, alt }) => (
                <li key={src} className={s.aboutOverviewGalleryItem}>
                  <img
                    className={s.aboutOverviewGalleryImage}
                    src={src}
                    alt={alt}
                  />
                </li>
              ))}
            </ul>
          </div>
          <ul className={s.aboutOverviewStats}>
            {ABOUT_STATS.map(({ value, description }) => (
              <li key={value} className={s.aboutOverviewStat}>
                <span className={s.aboutOverviewStatValue}>{value}</span>
                <p className={s.aboutOverviewStatDescription}>
                  {t(description)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
