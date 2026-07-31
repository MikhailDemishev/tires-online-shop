import { Link } from 'react-router-dom';
import s from './Banner.module.scss';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Button, type VariantBtn } from '@/shared/ui/Button';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';

export type BannerLink = {
  to: string;
  linkName: string;
  btnVariant?: VariantBtn;
};

export type BannerProps = {
  bannerTitle: string;
  breadcrumbs?: BreadcrumbItem[];
  links?: BannerLink[];
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  image?: ReactNode;
  imageClassName?: string;
};

export const Banner = ({
  className,
  links,
  breadcrumbs,
  bannerTitle,
  contentClassName,
  image,
  imageClassName,
  children,
}: BannerProps) => {
  return (
    <section className={clsx(s.banner, className)}>
      <div className={clsx('container', s.bannerWrapper)}>
        {breadcrumbs && (
          <Breadcrumbs className={s.bannerBreadcrumbs} items={breadcrumbs} />
        )}
        <div className={clsx(contentClassName, s.bannerContent)}>
          <h2 className={s.bannerTitle}>{bannerTitle}</h2>
          <p className={s.bannerDescription}>{children}</p>
          {links && (
            <div className={s.bannerLinks}>
              {links.map(({ to, linkName, btnVariant }) => (
                <Button
                  key={to}
                  {...(btnVariant && { variant: btnVariant })}
                  asChild
                >
                  <Link to={to} className={s.bannerLink}>
                    {linkName}
                  </Link>
                </Button>
              ))}
            </div>
          )}
          {image && (
            <div className={clsx(s.bannerImage, imageClassName)}>{image}</div>
          )}
        </div>
      </div>
    </section>
  );
};
