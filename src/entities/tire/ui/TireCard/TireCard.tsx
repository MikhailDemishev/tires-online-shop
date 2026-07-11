import type { Tire } from '@/entities/tire/model';
import s from './TireCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import clsx from 'clsx';
import { ROUTES } from '@/app/router';
type Props = {
  tire: Tire;
  className?: string;
};

export const TireCard = ({ tire, className }: Props) => {
  return (
    <ProductCard
      product={tire}
      className={clsx(className, s.tireCard)}
      to={`${ROUTES.tires}/${tire.id}`}
    >
      <p className={s.text}>{tire.protector ?? ''}</p>
    </ProductCard>
  );
};
