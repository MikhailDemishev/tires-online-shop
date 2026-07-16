import { Dot } from '@/assets/icons';
import s from './InStockIndicator.module.scss';
import clsx from 'clsx';

type InStockIndicatorProps = {
  quantityInStock: number;
  className?: string;
};

export const InStockIndicator = ({
  quantityInStock,
}: InStockIndicatorProps) => {
  return (
    <div className={s.inStockIndicator}>
      <Dot
        className={clsx(
          s.inStockIndicatorIcon,
          quantityInStock > 0 ? s.inStock : s.outOfStock,
        )}
      />
      {quantityInStock > 0 ? (
        <span className={clsx(s.inStockIndicatorText)}>в наличии</span>
      ) : (
        <span className={clsx(s.inStockIndicatorText)}>не в наличии</span>
      )}
    </div>
  );
};
