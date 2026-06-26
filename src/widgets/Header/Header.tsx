import { pageRoutes, catalogRoutes } from '@/app/router';
import { NavBar } from '@/shared/ui/NavBar';
import s from './Header.module.scss';
import clsx from 'clsx';

export const Header = () => {
  return (
    <header className={clsx('container', s.header)}>
      <div className={s.headerTop}>
        <NavBar
          items={pageRoutes}
          className={s.headerNavBar}
          navLinkClassName={s.headerNavBarLink}
        />
      </div>
      <div className={s.headerBottom}>
        <NavBar
          items={catalogRoutes}
          className={s.headerNavBar}
          navLinkClassName={s.headerNavBarLink}
        />
      </div>
    </header>
  );
};
