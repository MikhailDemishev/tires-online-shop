import s from './Footer.module.scss';
import { FOOTER_COLUMNS, footerSocials } from '@/widgets/Footer/config';
import { FooterColumn } from './FooterColumn';
import { NavBar } from '@/shared/ui/NavBar';
import { footerRoutes } from '@/app/router/footerRoutes';
import { Socials } from '@/shared/ui/Socials';
import { Logo } from '@/shared/ui/Logo/Logo';
import { useTranslation } from '@/shared/lib/hooks';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer}>
      <div className={'container'}>
        <div className={s.footerTop}>
          <ul className={s.footerColumns}>
            {FOOTER_COLUMNS.map(({ id, title }) => (
              <FooterColumn
                key={id}
                title={t(title)}
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
                {id === 'contacts' && <p>{t('footer.contacts')}</p>}
                {id === 'address' && <p>{t('footer.address')}</p>}
              </FooterColumn>
            ))}
          </ul>

          <Socials
            items={footerSocials}
            className={s.footerSocials}
            linkClassName={s.footerSocialLink}
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
