import { ourValues } from '@/widgets/AboutUs/config';
import s from './OurValues.module.scss';

export const OurValues = () => {
  return (
    <section className={s.ourValues}>
      <div className="container">
        <div className={s.ourValuesHeader}>
          <span className={s.ourValuesEyebrow}>Наши ценности</span>
          <h2 className={s.ourValuesTitle}>
            Исследовать мир без ограничений — уверенно на любом покрытии
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
                <h3 className={s.ourValuesItemTitle}>{title}</h3>
                <p className={s.ourValuesDescription}>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
