import type { WheelSpacer } from '@/entities/wheelSpacer/model';
import s from './WheelSpacerCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { ROUTES } from '@/app/router';
type Props = {
  wheelSpacer: WheelSpacer;
};

export const WheelSpacerCard = ({ wheelSpacer }: Props) => {
  return (
    <ProductCard
      product={wheelSpacer}
      className={s.wheelSpacerCard}
      to={`${ROUTES.wheelSpacers}/${wheelSpacer.id}`}
    >
      {/*отдеььные свойства */}
    </ProductCard>
  );
};
