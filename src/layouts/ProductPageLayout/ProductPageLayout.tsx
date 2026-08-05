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
import { getPageState } from '@/layouts/lib';
import { PageStateWidget } from '@/widgets/PageState/ui/PageStateWidget';
import { useTranslation } from '@/shared/lib/hooks';

type Props = {
  title: string;
  children: ReactNode;
  totalPages: number;
  currentPage: number;
  category?: BreadcrumbItem;
  isError: boolean;
  isLoading: boolean;
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
  isError,
  isLoading,
  isEmpty,
}: Props) => {
  // Backend uses 0-based page numbering, Pagination uses 1-based.
  const displayPage = currentPage + 1;
  const { t } = useTranslation();

  const pageState = getPageState({
    isLoading,
    isError,
    isEmpty,
  });

  return (
    <section className={clsx(className, s.productPageLayout)}>
      <div className="container">
        {pageState ? (
          <PageStateWidget title={title} variant={pageState} />
        ) : (
          <div className={s.layoutWrapper}>
            <section className={s.header}>
              <div>
                {category && (
                  <Breadcrumbs
                    items={[
                      { label: t('pages.home.title'), to: ROUTES.home },
                      {
                        ...category,
                        label: t(category.label),
                      },
                    ]}
                  />
                )}

                <h1 className={s.title}>{t(title)}</h1>
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

              <div className={s.content}> {children}</div>
            </section>

            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={displayPage}
                className={s.layoutPagination}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
