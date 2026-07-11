import type { ReactNode } from 'react';
import s from './ProductDetailsPageLayout.module.scss';
import clsx from 'clsx';
type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export const ProductDetailsPageLayout = ({
  title,
  children,
  className,
}: Props) => {
  return (
    <section className={clsx(className, s.productDetailsPageLayout)}>
      <div className="container">
        <div className={s.layoutWrapper}>
          <section className={s.header}>
            <div>
              <div className={s.breadcrumbs}>Товар / {title}</div>
              <h1 className={s.title}>Заголовок страницы {title}</h1>
            </div>
          </section>
          {children}
        </div>
      </div>
    </section>
  );
};
