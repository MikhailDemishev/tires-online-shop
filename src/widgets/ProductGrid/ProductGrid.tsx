import type { ReactNode } from 'react';
import s from './ProductGrid.module.scss';

type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string | number;
};

export const ProductGrid = <T,>({ items, renderItem, getKey }: Props<T>) => {
  return (
    <div className={s.productGrid}>
      {items.map((item) => (
        <div key={getKey(item)} className={s.item}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
