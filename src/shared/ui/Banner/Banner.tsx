import { Link } from 'react-router-dom';
import s from './Banner.module.scss';
import clsx from 'clsx';
import { Fragment, type ReactNode } from 'react';
import { Button, type VariantBtn } from '@/shared/ui/Button';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import { Text } from '../Text';

export type BannerLink = {
  linkName: string;
  to?: string;
  btnVariant?: VariantBtn;
  onClick?: () => void;
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
      <div className="container">
        <div className={s.bannerWrapper}>
          {breadcrumbs && (
            <Breadcrumbs className={s.bannerBreadcrumbs} items={breadcrumbs} />
          )}
          <div className={s.bannerInner}>
            <div className={clsx(contentClassName, s.bannerContent)}>
              <Text as={'h2'} variant="h2" className={s.bannerTitle}>
                {bannerTitle}
              </Text>
              <Text className={s.bannerDescription}>{children}</Text>
              {links && (
                <div
                  className={clsx(
                    links.length === 1
                      ? s.bannerLinksSingle
                      : s.bannerLinksMultiple,
                  )}
                >
                  {links.map(({ to, linkName, btnVariant, onClick }) => (
                    <Fragment key={linkName}>
                      {to && (
                        <Button
                          {...(btnVariant && { variant: btnVariant })}
                          asChild
                        >
                          <Link to={to} className={s.bannerLink}>
                            {linkName}
                          </Link>
                        </Button>
                      )}

                      {onClick && (
                        <Button
                          {...(btnVariant && { variant: btnVariant })}
                          onClick={onClick}
                        >
                          {linkName}
                        </Button>
                      )}
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
            {image && (
              <div className={clsx(s.bannerImage, imageClassName)}>{image}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
