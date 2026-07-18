import { Dot } from '@/assets/icons';
import s from './InStockIndicator.module.scss';
import clsx from 'clsx';

type InStockIndicatorProps = {
  inStock: boolean;
  className?: string;
};

export const InStockIndicator = ({ inStock }: InStockIndicatorProps) => {
  return (
    <div className={s.inStockIndicator}>
      <Dot
        className={clsx(
          s.inStockIndicatorIcon,
          inStock ? s.inStock : s.outOfStock,
        )}
      />
      {inStock ? (
        <span className={clsx(s.inStockIndicatorText)}>В наличии</span>
      ) : (
        <span className={clsx(s.inStockIndicatorText)}>Нет в наличии</span>
      )}
    </div>
  );
};
