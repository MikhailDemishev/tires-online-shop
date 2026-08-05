import { BRAND_STATS, brandSocials } from '@/widgets/Home/config';
import s from './BrandIntro.module.scss';
import { Socials } from '@/shared/ui/Socials';
import { useTranslation } from '@/shared/lib/hooks';

export const BrandIntro = () => {
  const { t } = useTranslation();
  return (
    <section className={s.brandIntro}>
      <div className={'container'}>
        <div className={s.brandIntroWrapper}>
          <div className={s.brandIntroLeft}>
            <div className={s.brandIntroLeftTop}>
              <h2 className={s.brandIntroTitle}>
                {t('pages.home.brandIntro.title')}
              </h2>
              <p className={s.brandIntroDescription}>
                {t('pages.home.brandIntro.description.beforeAccent')}{' '}
                <span className={s.accent}>
                  {t('pages.home.brandIntro.description.accent')}{' '}
                </span>
                {t('pages.home.brandIntro.description.afterAccent')}{' '}
              </p>
            </div>
            <Socials
              items={brandSocials}
              className={s.brandIntroSocials}
              linkClassName={s.brandIntroSocialLink}
              labelBlockClassName={s.brandIntroSocialLabel}
              showLabel
            ></Socials>
          </div>
          <div className={s.brandIntroRight}>
            <ul className={s.introStats}>
              {BRAND_STATS.map(
                ({ id, Icon, iconClassName, value, description }) => (
                  <li key={id} className={s.introItem}>
                    <span className={s.introIcon}>
                      <Icon className={s[iconClassName]} />
                    </span>
                    <div className={s.introContent}>
                      <h3 className={s.introTitle}>{value}</h3>
                      <p className={s.introDescription}>{t(description)}</p>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className={s.brandIntroBottom}>
          <p className={s.brandIntroBottomText}>
            {t('pages.home.brandIntro.bottom.beforeValue')}{' '}
            <span className={s.large}>500 000+</span>{' '}
            {t('pages.home.brandIntro.bottom.afterValue')}
          </p>
        </div>
      </div>
    </section>
  );
};
