import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router';
import s from './ErrorState.module.scss';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from '@/shared/lib/hooks';

export const ErrorState = () => {
  const { t } = useTranslation();
  return (
    <div className={s.errorState}>
      <p className={s.errorCode} aria-hidden="true">
        404
      </p>

      <div className={s.errorBottom}>
        <p className={s.errorText}>
          <span>{t('pages.notFound.text.first')}</span>
          <span>{t('pages.notFound.text.second')}</span>
        </p>
        <Button asChild>
          <Link className={s.errorLink} to={ROUTES.tires}>
            {t('pages.notFound.toCatalog')}
          </Link>
        </Button>
      </div>
    </div>
  );
};
