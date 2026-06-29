import type { ReactNode } from 'react';
import s from './ProductPageLayout.module.scss';
import clsx from 'clsx';

type Props = {
  title: string;
  filters?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  pagination?: ReactNode;
  className?: string;
};

export const ProductPageLayout = ({
  title,
  filters,
  actions,
  children,
  pagination,
  className,
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
        <aside className={s.filters}>{filters}Здесь будут фильтры</aside>

        <div className={s.content}>
          {children}
          {pagination}
        </div>
      </section>
    </section>
  );
};
