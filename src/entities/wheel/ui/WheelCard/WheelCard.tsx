import type { Wheel } from '@/entities/wheel/model';
import s from './WheelCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { ROUTES } from '@/app/router';
type Props = {
  wheel: Wheel;
};

export const WheelCard = ({ wheel }: Props) => {
  return (
    <ProductCard
      product={wheel}
      className={s.wheelCard}
      title={wheel.title}
      to={`${ROUTES.wheels}/${wheel.id}`}
    >
      {/* <p className={s.text}>
        {wheel.diameter}"
        {wheel.material && wheel.material !== '-'
          ? `, ${wheel.material.toLowerCase()}`
          : ''}
      </p> */}
    </ProductCard>
  );
};
