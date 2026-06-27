import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__top}>
        <div className="container">Верхняя часть футера</div>
      </div>
      <div className={s.footer__middle}>
        <div className="container">Средняя часть футера</div>
      </div>
      <div className={s.footer__bottom}>
        <div className="container">Средняя часть футера</div>
      </div>
    </footer>
  );
};
