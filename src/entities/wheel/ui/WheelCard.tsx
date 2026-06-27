import type { Wheel } from '@/entities/wheel/model';
import s from './WheelCard.module.scss';
import { ProductCard } from '@/entities/product/ProductCard/ui';
type Props = {
  wheel: Wheel;
};

export const WheelCard = ({ wheel }: Props) => {
  return (
    <ProductCard product={wheel} className={s.wheelCard}>
      <p className={s.material}>{wheel.material}</p>
    </ProductCard>
  );
};
