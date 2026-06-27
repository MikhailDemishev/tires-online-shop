import type { Tire } from '@/entities/tire/model';
import s from './TireCard.module.scss';
import { ProductCard } from '@/entities/product/ProductCard/ui';
import clsx from 'clsx';
type Props = {
  tire: Tire;
  className?: string;
};

export const TireCard = ({ tire, className }: Props) => {
  return (
    <ProductCard product={tire} className={clsx(className, s.tireCard)}>
      {/* Здесь будет специфичная информация о шине */}
      {/* Например: сезон, размер, RunFlat и т.д. */}
    </ProductCard>
  );
};
