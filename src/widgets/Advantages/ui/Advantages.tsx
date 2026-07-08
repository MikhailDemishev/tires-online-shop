import { ADVANTAGES } from '@/widgets/Advantages/config';
import s from './Advantages.module.scss';
import clsx from 'clsx';

export const Advantages = () => {
  return (
    <section className={s.homeAdvantages}>
      <div className={clsx('container', s.wrapper)}>
        <div className={s.advantages}>
          <h2 className={s.title}>преимущества</h2>
          <ul className={s.advantagesInner}>
            {ADVANTAGES.map(
              ({ id, Icon, iconClassName, title, description }) => (
                <li key={id} className={s.advantageItem}>
                  <Icon className={clsx(s.advantageIcon, s[iconClassName])} />
                  <div className={s.advantageContent}>
                    <h3 className={s.advantageTitle}>{title}</h3>
                    <p className={s.advantageDescription}>{description}</p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className={s.assortment}>
          <h2 className={s.title}>наш ассортимент</h2>
          <div>здесь будут значки видов шин</div>
        </div>
      </div>
    </section>
  );
};
