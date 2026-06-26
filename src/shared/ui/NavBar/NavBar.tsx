import { NavLink } from 'react-router-dom';

import s from './NavBar.module.scss';
import clsx from 'clsx';

type NavItem = {
  label: string;
  path: string;
};

type NavBarProps = {
  items: readonly NavItem[];
  className?: string;
  navLinkClassName?: string;
};

export const NavBar = ({ items, className, navLinkClassName }: NavBarProps) => {
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
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
