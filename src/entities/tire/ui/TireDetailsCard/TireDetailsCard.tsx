import type { TireDetails } from '@/entities/tire/model';
import s from './TireDetailsCard.module.scss';
import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';

type Props = {
  tire: TireDetails;
  className?: string;
};

export const TireDetailsCard = ({ tire, className }: Props) => {
  return (
    <ProductDetailsCard
      product={tire}
      className={clsx(className, s.tireDetailsCard)}
    />
  );
};
