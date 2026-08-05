import type { ReactNode } from 'react';
import s from './InfoPageLayout.module.scss';
import clsx from 'clsx';
import { Pagination } from '@/features/pagination/ui';
import { Breadcrumbs } from '@/shared/ui/BreadCrumbs';
import { PageStateWidget } from '@/widgets/PageState/ui/PageStateWidget';
import { getPageState } from '@/layouts/lib';
import { useTranslation } from '@/shared/lib/hooks';

type Props = {
  title: string;
  children: ReactNode;
  isError?: boolean;
  isLoading?: boolean;
  totalPages?: number;
  currentPage?: number;
  headerNode?: ReactNode;
  isEmpty?: boolean;
  className?: string;
};

export const InfoPageLayout = ({
  title,
  headerNode,
  totalPages = 1,
  currentPage = 0,
  isError,
  isLoading,
  className,
  isEmpty,
  children,
}: Props) => {
  // Backend uses 0-based page numbering, Pagination uses 1-based.
  const displayPage = currentPage + 1;

  const pageState = getPageState({
    isLoading,
    isError,
    isEmpty,
  });
  const { t } = useTranslation();

  return (
    <section className={clsx(className, s.infoPageLayout)}>
      <div className="container">
        {pageState ? (
          <PageStateWidget title={title} variant={pageState} />
        ) : (
          <div className={s.layoutWrapper}>
            <section className={s.header}>
              <div className={s.headerTop}>
                <Breadcrumbs
                  items={[
                    { label: t('pages.home.title'), to: '/' },
                    { label: t(title) },
                  ]}
                />
              </div>
              <div className={s.headerBottom}>
                <h1 className={s.title}>{t(title)}</h1>
                {headerNode}
              </div>
            </section>

            <div className={s.content}>{children}</div>

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
