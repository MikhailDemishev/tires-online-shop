import type { ReactNode } from 'react';
import s from './ProductPageLayout.module.scss';
import clsx from 'clsx';
import { Pagination } from '@/shared/ui/Pagination';
import type { ProductFilterType } from '@/features/filters/model';
import { ProductFilter } from '@/features/filters/ProductFilter';

type Props = {
  title: string;
  children: ReactNode;
  isEmpty?: boolean;
  filterType?: ProductFilterType;
  actions?: ReactNode;
  pagination?: ReactNode;
  className?: string;
};

export const ProductPageLayout = ({
  title,
  children,
  filterType,
  actions,
  className,
  isEmpty,
}: Props) => {
  return (
    <section className={clsx(className, 'container', s.productPageLayout)}>
      <section className={s.header}>
        <div>
          <div className={s.breadcrumbs}>Главная / {title}</div>
          <h1 className={s.title}>{title}</h1>
        </div>

        <div className={s.actions}>{actions}Здесь будет селект</div>
      </section>

      <section className={s.body}>
        {filterType && (
          <aside className={s.filters}>
            <ProductFilter filterType={filterType} />
          </aside>
        )}

        <div className={s.content}>
          {isEmpty ? (
            <p>Товары не найдены</p>
          ) : (
            <>
              {children}
              <Pagination />
            </>
          )}
        </div>
      </section>
    </section>
  );
};
