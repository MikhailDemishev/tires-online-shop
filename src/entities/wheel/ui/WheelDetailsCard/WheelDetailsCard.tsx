//import type { Tire } from '@/entities/tire/model';

// import { ProductCard } from '@/entities/product/ui/ProductCard';
// import clsx from 'clsx';
// import { ROUTES } from '@/app/router';

import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import type { Wheel } from '@/entities/wheel/model';
import s from './WheelDetailsCard.module.scss';

type Props = {
  wheel: Wheel;
  className?: string;
};

export const WheelDetailsCard = ({ wheel, className }: Props) => {
  return (
    <ProductDetailsCard
      product={wheel}
      className={clsx(className, s.tireDetailsCard)}
    />
  );
};
