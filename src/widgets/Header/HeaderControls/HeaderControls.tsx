import { useAppDispatch } from '@/app/store';
import { openModal } from '@/app/store/slices';
import { Button } from '@/shared/ui/Button';
import { Link } from 'react-router-dom';
import s from './HeaderControls.module.scss';
import { LanguageSelect } from '@/features//language/ui';

type HeaderControlsProps = {
  controls: readonly {
    icon: React.ElementType;
    path: string;
    requiresAuth: boolean;
  }[];
  isLanguageSelect?: boolean;
};

export const HeaderControls = ({
  controls,
  isLanguageSelect = false,
}: HeaderControlsProps) => {
  const isAuthenticated = false;
  const dispatch = useAppDispatch();

  return (
    <div className={s.headerControls}>
      {isLanguageSelect && <LanguageSelect className={s.btn} />}
      {controls.map(({ icon: Icon, path, requiresAuth: isProtected }) => (
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
      ))}
    </div>
  );
};
