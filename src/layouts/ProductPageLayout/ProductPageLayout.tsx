import type { ReactNode } from 'react';
import s from './ProductPageLayout.module.scss';
import clsx from 'clsx';

import type { ProductFilterType } from '@/features/filters/model';
import { ProductFilter } from '@/features/filters/ui/ProductFilter';
import { Pagination } from '@/features/pagination/ui';

type Props = {
  title: string;
  children: ReactNode;
  totalPages: number;
  currentPage: number;
  isEmpty?: boolean;
  filterType?: ProductFilterType;
  page?: string;
  actions?: ReactNode;
  className?: string;
};

export const ProductPageLayout = ({
  title,
  children,
  totalPages,
  currentPage,
  filterType,
  actions,
  className,
  page,
  isEmpty,
}: Props) => {
  // Backend uses 0-based page numbering, Pagination uses 1-based.
  const displayPage = currentPage + 1;
  return (
    <section className={clsx(className, 'container', s.productPageLayout)}>
      <section className={s.header}>
        <div>
          <div className={s.breadcrumbs}>Главная / {title}</div>
          <h1 className={s.title}>{title}</h1>
        </div>

        <div className={s.actions}>{actions}Здесь будет селект</div>
      </section>

      <section className={clsx(s.body, !filterType && s.bodyWithoutFilters)}>
        {filterType && (
          <aside className={s.filters}>
            <ProductFilter filterType={filterType} page={page} />
          </aside>
        )}

        <div className={s.content}>
          {isEmpty ? (
            <p>Товары не найдены</p>
          ) : (
            <>
              {children}
              {totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={displayPage} />
              )}
            </>
          )}
        </div>
      </section>
    </section>
  );
};
