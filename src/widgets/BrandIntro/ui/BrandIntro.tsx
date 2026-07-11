import { BRAND_STATS } from '@/widgets/BrandIntro/config';
import { BRAND_SOCIALS } from '@/widgets/BrandIntro/config';
import s from './BrandIntro.module.scss';
import { Link } from 'react-router-dom';

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

            <div className={s.brandIntroLeftBottom}>
              {BRAND_SOCIALS.map(({ id, Icon, title, to }) => (
                <Link key={id} to={to} className={s.socialLink}>
                  <span className={s.socialLinkText}>{title}</span>
                  <Icon className={s.socialLinkIcon} />
                </Link>
              ))}
            </div>
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
