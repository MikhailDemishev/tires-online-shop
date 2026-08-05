import { NavLink } from 'react-router-dom';

import s from './NavBar.module.scss';
import clsx from 'clsx';
import { useTranslation } from '@/shared/lib/hooks';

type NavItem = {
  labelKey: string;
  path: string;
};

type NavBarProps = {
  items: readonly NavItem[];
  className?: string;
  navLinkClassName?: string;
};

export const NavBar = ({ items, className, navLinkClassName }: NavBarProps) => {
  const { t } = useTranslation();
  return (
    <nav className={clsx(className, s.nav)}>
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            clsx(s.link, navLinkClassName, isActive && s.active)
          }
        >
          {t(item.labelKey)}
        </NavLink>
      ))}
    </nav>
  );
};
