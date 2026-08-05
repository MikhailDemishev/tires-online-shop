import { Dot } from '@/assets/icons';
import s from './InStockIndicator.module.scss';
import clsx from 'clsx';
import { useTranslation } from '@/shared/lib/hooks';

type InStockIndicatorProps = {
  inStock: boolean;
  className?: string;
};

export const InStockIndicator = ({ inStock }: InStockIndicatorProps) => {
  const { t } = useTranslation();

  return (
    <div className={s.inStockIndicator}>
      <Dot
        className={clsx(
          s.inStockIndicatorIcon,
          inStock ? s.inStock : s.outOfStock,
        )}
      />
      {inStock ? (
        <span className={clsx(s.inStockIndicatorText)}>
          {t('cards.inStock')}
        </span>
      ) : (
        <span className={clsx(s.inStockIndicatorText)}>
          {t('cards.notInStock')}
        </span>
      )}
    </div>
  );
};
