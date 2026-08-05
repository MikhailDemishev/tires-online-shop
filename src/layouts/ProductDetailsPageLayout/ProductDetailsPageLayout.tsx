import type { ReactNode } from 'react';
import s from './ProductDetailsPageLayout.module.scss';
import clsx from 'clsx';
import { ROUTES } from '@/app/router';
import { Breadcrumbs, type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import { getPageState } from '@/layouts/lib';
import { PageStateWidget } from '@/widgets/PageState/ui/PageStateWidget';
import { useTranslation } from '@/shared/lib/hooks';

type Props = {
  title: string;
  isError: boolean;
  isLoading: boolean;
  isEmpty: boolean;
  productDetailsCard: ReactNode;
  category: BreadcrumbItem;
  className?: string;
};

export const ProductDetailsPageLayout = ({
  title,
  productDetailsCard,
  isError,
  isLoading,

  isEmpty,
  category,
  className,
}: Props) => {
  const pageState = getPageState({
    isLoading,
    isError,
    isEmpty,
  });
  const { t } = useTranslation();
  return (
    <section className={clsx(className, s.productDetailsPageLayout)}>
      <div className="container">
        {pageState ? (
          <PageStateWidget title={title} variant={pageState} />
        ) : (
          <div className={s.layoutWrapper}>
            <section className={s.header}>
              <Breadcrumbs
                items={[
                  { label: t('pages.home.title'), to: ROUTES.home },
                  {
                    ...category,
                    label: t(category.label),
                  },
                  { label: title },
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
        )}
      </div>
    </section>
  );
};
