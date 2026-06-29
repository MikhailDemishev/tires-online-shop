import clsx from 'clsx';
import s from './Footer.module.scss';
import { FooterTop } from '@/widgets/Footer/ui';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <FooterTop className={clsx(s.footerTop)} />
      <div className={s.footer__middle}>
        <div className="container">Средняя часть футера</div>
      </div>
      <div className={s.footer__bottom}>
        <div className="container">Нижняя часть футера</div>
      </div>
    </footer>
  );
};
