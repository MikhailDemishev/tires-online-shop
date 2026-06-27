import { pageRoutes, catalogRoutes } from '@/app/router';
import { NavBar } from '@/shared/ui/NavBar';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <div className="container">
          <NavBar
            items={pageRoutes}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />
        </div>
      </div>
      <div className={s.headerBottom}>
        <div className="container">
          <NavBar
            items={catalogRoutes}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />
        </div>
      </div>
    </header>
  );
};
