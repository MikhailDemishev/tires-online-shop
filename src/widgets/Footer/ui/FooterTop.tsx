import { footerFeatures } from '@/widgets/Footer/config';
import s from './FooterTop.module.scss';
import clsx from 'clsx';

type FooterTopProps = {
  className?: string;
};

export const FooterTop = ({ className }: FooterTopProps) => {
  return (
    <div className={s.footerTopWrapper}>
      <div className={clsx('container', className)}>
        {footerFeatures.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className={s.footerTopItem}>
              <Icon className={s.icon} />
              <div className={s.right}>
                <h3 className={s.title}>{item.title}</h3>
                <p className={s.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
