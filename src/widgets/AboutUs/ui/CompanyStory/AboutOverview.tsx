import { ABOUT_STATS, aboutImages } from '@/widgets/AboutUs/config';
import s from './AboutOverview.module.scss';

export const AboutOverview = () => {
  return (
    <section className={s.aboutOverview}>
      <div className="container">
        <h2 className="visuallyHidden">About Overview</h2>

        <div className={s.aboutOverviewWrapper}>
          <div className={s.aboutOverviewLeft}>
            <div className={s.aboutOverviewInfo}>
              <h3 className={s.aboutOverviewTitle}>
                Мы делаем бездорожье доступным — вы выбираете маршрут без
                ограничений
              </h3>
              <p className={s.aboutOverviewDescription}>
                С 1988 года мы помогаем владельцам внедорожников находить
                надёжные шины для сложных маршрутов — честно рассказываем о
                характеристиках и подбираем комплект под конкретный автомобиль.
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
                <p className={s.aboutOverviewStatDescription}>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
