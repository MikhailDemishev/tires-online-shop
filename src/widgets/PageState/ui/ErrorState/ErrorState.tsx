import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router';
import s from './ErrorState.module.scss';
import { Button } from '@/shared/ui/Button';

export const ErrorState = () => {
  return (
    <div className={s.errorState}>
      <p className={s.errorCode} aria-hidden="true">
        404
      </p>

      <div className={s.errorBottom}>
        <p className={s.errorText}>
          <span>Кажется, что-то произошло не так</span>
          <span>Попробуйте перезагрузить страницу</span>
        </p>
        <Button asChild>
          <Link className={s.errorLink} to={ROUTES.tires}>
            Перейти в каталог
          </Link>
        </Button>
      </div>
    </div>
  );
};
