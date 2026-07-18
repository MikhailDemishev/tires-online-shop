import clsx from 'clsx';
import s from './GuaranteeBanner.module.scss';
import { Button } from '@/shared/ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router';
type BannerProps = {
  className?: string;
  classNameContent?: string;
};

export const GuaranteeBanner = ({
  className,
  classNameContent,
}: BannerProps) => {
  return (
    <section className={clsx(className, s.guaranteeBanner)}>
      <div className="container">
        <div className={clsx(s.guaranteeBannerContent, classNameContent)}>
          <h1 className={s.guaranteeBannerTitle}>гарантии качества</h1>
          <p className={s.guaranteeBannerText}>
            <span>Официальная гарантия производителей,</span>
            <span>30 дней на возврат и поддержка специалистов 4x4.</span>
          </p>
          <Button asChild className={s.guaranteeBannerLink}>
            <Link to={ROUTES.tires}>перейти в каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
