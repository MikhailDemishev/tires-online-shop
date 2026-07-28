import { Link } from 'react-router-dom';
import s from './Banner.module.scss';
import clsx from 'clsx';
import type { ReactNode } from 'react';

export type BannerProps = {
  to: string;
  bannerTitle: string;
  linkName: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export const Banner = ({
  className,
  to,
  linkName,
  bannerTitle,
  contentClassName,
  children,
}: BannerProps) => {
  return (
    <section className={clsx(s.banner, className)}>
      <div className="container">
        <div className={clsx(contentClassName, s.bannerContent)}>
          <h2 className={s.bannerTitle}>{bannerTitle}</h2>
          <p className={s.bannerDescription}>{children}</p>
          <Link to={to} className={s.bannerLink}>
            {linkName}
          </Link>
        </div>
      </div>
    </section>
  );
};
