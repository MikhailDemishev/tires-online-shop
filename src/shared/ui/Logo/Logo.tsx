import { Link } from 'react-router-dom';
import s from './Logo.module.scss';
import { ROUTES } from '@/app/router';

export const Logo = () => {
  return (
    <Link to={ROUTES.home} className={s.logo}>
      Insa Turbo
    </Link>
  );
};
