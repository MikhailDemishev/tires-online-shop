import s from './Footer.module.scss';
import { FOOTER_COLUMNS, footerSocials } from '@/widgets/Footer/config';
import { FooterColumn } from './FooterColumn';
import { NavBar } from '@/shared/ui/NavBar';
import { footerRoutes } from '@/app/router/footerRoutes';
import { Socials } from '@/shared/ui/Socials';
import { Logo } from '@/shared/ui/Logo/Logo';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={'container'}>
        <div className={s.footerTop}>
          <ul className={s.footerColumns}>
            {FOOTER_COLUMNS.map(({ id, title }) => (
              <FooterColumn
                key={id}
                title={title}
                className={s.column}
                titleClassName={s.columnTitle}
              >
                {id === 'information' && (
                  <NavBar
                    items={footerRoutes.information}
                    className={s.footerNavBar}
                    navLinkClassName={s.footerNavBarLink}
                  />
                )}
                {id === 'support' && (
                  <NavBar
                    items={footerRoutes.support}
                    className={s.footerNavBar}
                    navLinkClassName={s.footerNavBarLink}
                  />
                )}
                {id === 'contacts' && (
                  <p>
                    +48 500 405 819 insaturbo4x4.help@gmail.com Пн - Пт: 8:00 -
                    20:00
                  </p>
                )}
                {id === 'address' && (
                  <p>Jerzego Badury 20, 56-416 Goszcz, Польша</p>
                )}
              </FooterColumn>
            ))}
          </ul>

          <Socials
            items={footerSocials}
            className={s.footerSocials}
            linkClassName={s.footerSocialLink}
            iconClassName={s.footerSocialIcon}
          />
        </div>
        <div className={s.footerBottom}>
          <p className={s.copyright}>
            © InsaTurbo4×4 — Off-road solutions for 4×4 drivers.
          </p>
          <div>здесь будут куки итд</div>
          <Logo />
        </div>
      </div>
    </footer>
  );
};
