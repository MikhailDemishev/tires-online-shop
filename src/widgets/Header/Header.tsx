import { headerRoutes } from '@/app/router';
import { NavBar } from '@/shared/ui/NavBar';
import s from './Header.module.scss';
import clsx from 'clsx';
import { SearchInput } from '@/features/search/ui/SearchInput';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { HeaderControls } from './HeaderControls';
import { Logo } from '@/shared/ui/Logo/Logo';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const match = matchPath('/products/title/:title', location.pathname);

  const search = match?.params.title
    ? decodeURIComponent(match.params.title)
    : '';

  const handleInputChange = (query: string) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      navigate('/products/title');
      return;
    }

    navigate(`/products/title/${encodeURIComponent(trimmedQuery)}`);
  };
  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <div className={clsx('container', s.headerTopContent)}>
          <NavBar
            items={headerRoutes.pages}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />
          <HeaderControls />
        </div>
      </div>
      <div className={s.headerBottom}>
        <div className={clsx('container', s.wrapper)}>
          <Logo />
          <NavBar
            items={headerRoutes.catalog}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />

          <SearchInput
            className={s.headerInput}
            value={search}
            onSearchChange={handleInputChange}
          />
        </div>
      </div>
    </header>
  );
};
