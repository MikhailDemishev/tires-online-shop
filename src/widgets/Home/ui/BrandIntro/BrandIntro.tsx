import { BRAND_STATS, brandSocials } from '@/widgets/Home/config';
import s from './BrandIntro.module.scss';
import { Socials } from '@/shared/ui/Socials';

export const BrandIntro = () => {
  return (
    <section className={s.brandIntro}>
      <div className={'container'}>
        <div className={s.brandIntroWrapper}>
          <div className={s.brandIntroLeft}>
            <div className={s.brandIntroLeftTop}>
              <h2 className={s.brandIntroTitle}>кто мы</h2>
              <p className={s.brandIntroDescription}>
                INSA TURBO — семейный бренд с глобальным мышлением. Мы соединили
                инженерные инновации и экологический манифест, чтобы создавать{' '}
                <span className={s.accent}>
                  лучшие восстановленные шины для любого транспорта.{' '}
                </span>
                Бескомпромиссное качество, которое работает на благо общества и
                планеты.
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
                      <p className={s.introDescription}>{description}</p>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className={s.brandIntroBottom}>
          <p className={s.brandIntroBottomText}>
            Европейский масштаб: <span className={s.large}>500 000+</span> шин в
            год
          </p>
        </div>
      </div>
    </section>
  );
};
