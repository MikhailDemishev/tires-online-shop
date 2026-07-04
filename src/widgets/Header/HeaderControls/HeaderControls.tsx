import { headerControlRoutes } from '@/app/router/headerControlRoutes';
import { useAppDispatch } from '@/app/store';
import { openModal } from '@/app/store/slices';
import { Button } from '@/shared/ui/Button';
import { Link } from 'react-router-dom';
import s from './HeaderControls.module.scss';

export const HeaderControls = () => {
  //temporary
  const isAuthenticated = false;
  const dispatch = useAppDispatch();
  return (
    <div className={s.headerControls}>
      {headerControlRoutes.map(
        ({ icon: Icon, path, protected: isProtected }) => (
          <Button asChild key={path} variant="unset" className={s.btn}>
            <Link
              to={path}
              onClick={(e) => {
                if (isProtected && !isAuthenticated) {
                  e.preventDefault();
                  dispatch(openModal({ type: 'Auth' }));
                }
              }}
            >
              <Icon className={s.icon} />
            </Link>
          </Button>
        ),
      )}
    </div>
  );
};
