import type { ReactNode } from 'react';
import s from './ProductDetailsPageLayout.module.scss';
import clsx from 'clsx';
import { ROUTES } from '@/app/router';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import { useLocation } from 'react-router-dom';
type Props = {
  title: string;
  children: ReactNode;
  category: BreadcrumbItem;
  className?: string;
};

export const ProductDetailsPageLayout = ({
  title,
  children,
  category,
  className,
}: Props) => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <section className={clsx(className, s.productDetailsPageLayout)}>
      <div className="container">
        <div className={s.layoutWrapper}>
          <section className={s.header}>
            <div>
              <Breadcrumbs
                items={[
                  { label: 'Главная', to: ROUTES.home },
                  category,
                  { label: `${title}` },
                ]}
              />
              <h1 className={s.title}>Заголовок страницы {title}</h1>
            </div>
          </section>
          {children}
        </div>
      </div>
    </section>
  );
};
