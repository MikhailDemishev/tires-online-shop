import { pageRoutes, catalogRoutes, ROUTES } from '@/app/router';
import { NavBar } from '@/shared/ui/NavBar';
import s from './Header.module.scss';
import clsx from 'clsx';
import { SearchInput } from '@/features/search/ui/SearchInput';
import { Link } from 'react-router';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { HeaderControls } from './HeaderControls';

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
            items={pageRoutes}
            className={s.headerNavBar}
            navLinkClassName={s.headerNavBarLink}
          />
          <HeaderControls />
        </div>
      </div>
      <div className={s.headerBottom}>
        <div className={clsx('container', s.wrapper)}>
          <Link to={ROUTES.home} className={s.logo}>
            Insa Turbo
          </Link>
          <NavBar
            items={catalogRoutes}
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
