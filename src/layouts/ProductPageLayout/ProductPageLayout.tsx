import type { ReactNode } from 'react';
import s from './ProductPageLayout.module.scss';
import clsx from 'clsx';

import type { ProductFilterType } from '@/features/filters/model';
import { ProductFilter } from '@/features/filters/ui/ProductFilter';
import { Pagination } from '@/features/pagination/ui';
import { Sort } from '@/features/sort/ui';
import { PRODUCT_SORT_OPTIONS } from '@/features/sort/config';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import { ROUTES } from '@/app/router';

type Props = {
  title: string;
  children: ReactNode;
  totalPages: number;
  currentPage: number;
  category: BreadcrumbItem;
  isEmpty?: boolean;
  filterType?: ProductFilterType;
  page?: string;
  actions?: ReactNode;
  className?: string;
};

export const ProductPageLayout = ({
  title,
  category,
  children,
  totalPages,
  currentPage,
  filterType,
  className,
  page,
  isEmpty,
}: Props) => {
  // Backend uses 0-based page numbering, Pagination uses 1-based.
  const displayPage = currentPage + 1;
  return (
    <section className={clsx(className, s.productPageLayout)}>
      <div className="container">
        <div className={s.layoutWrapper}>
          <section className={s.header}>
            <div>
              <Breadcrumbs
                items={[{ label: 'Главная', to: ROUTES.home }, category]}
              />
              <h1 className={s.title}>{title}</h1>
            </div>

            <div className={s.actions}>
              <Sort sortOptions={PRODUCT_SORT_OPTIONS} />
            </div>
          </section>

          <section
            className={clsx(s.body, !filterType && s.bodyWithoutFilters)}
          >
            {filterType && (
              <aside className={s.filters}>
                <ProductFilter filterType={filterType} page={page} />
              </aside>
            )}

            <div className={s.content}>
              {isEmpty ? <p>Товары не найдены</p> : <>{children}</>}
            </div>
          </section>

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={displayPage}
              className={s.layoutPagination}
            />
          )}
        </div>
      </div>
    </section>
  );
};
