import type { ReactNode } from 'react';
import s from './ProductDetailsPageLayout.module.scss';
import clsx from 'clsx';
import { ROUTES } from '@/app/router';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
type Props = {
  title: string;
  productDetailsCard: ReactNode;
  category: BreadcrumbItem;
  className?: string;
};

export const ProductDetailsPageLayout = ({
  title,
  productDetailsCard,
  category,
  className,
}: Props) => {
  return (
    <section className={clsx(className, s.productDetailsPageLayout)}>
      <div className="container">
        <div className={s.layoutWrapper}>
          <section className={s.header}>
            <Breadcrumbs
              items={[
                { label: 'Главная', to: ROUTES.home },
                category,
                { label: `${title}` },
              ]}
            />
            <h1 className="visuallyHidden">Страница товара</h1>
          </section>
          <div className={s.layoutContent}>
            {productDetailsCard}
            <section>сюда передадим advantages</section>
            <section>сюда передадим похожие товары</section>
          </div>
        </div>
      </div>
    </section>
  );
};
