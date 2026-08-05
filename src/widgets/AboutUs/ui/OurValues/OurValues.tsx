import { ourValues } from '@/widgets/AboutUs/config';
import s from './OurValues.module.scss';
import { useTranslation } from '@/shared/lib/hooks';

export const OurValues = () => {
  const { t } = useTranslation();
  return (
    <section className={s.ourValues}>
      <div className="container">
        <div className={s.ourValuesHeader}>
          <span className={s.ourValuesEyebrow}>
            {t('pages.aboutUs.ourValues.eyebrow')}
          </span>
          <h2 className={s.ourValuesTitle}>
            {t('pages.aboutUs.ourValues.title')}
          </h2>
        </div>

        <ul className={s.ourValuesList}>
          {ourValues.map(({ title, description, Icon, iconSize }) => (
            <li key={title} className={s.ourValuesItem}>
              <div className={s.ourValuesIconWrapper}>
                <Icon
                  className={s.ourValuesIcon}
                  style={iconSize}
                  aria-hidden="true"
                />
              </div>

              <div className={s.ourValuesContent}>
                <h3 className={s.ourValuesItemTitle}>{t(title)}</h3>
                <p className={s.ourValuesDescription}>{t(description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
