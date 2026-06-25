import { appRoutes } from '@/app/router';
import { NavBar } from '@/shared/ui/NavBar';
import s from './Header.module.scss';
import clsx from 'clsx';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx('headerContainer', s.headerTop)}>
        <NavBar
          items={appRoutes}
          className={s.headerNavBar}
          navLinkClassName={s.headerNavBarLink}
        />
      </div>
      <div className={clsx('headerContainer', s.headerBottom)}></div>
    </header>
  );
};
