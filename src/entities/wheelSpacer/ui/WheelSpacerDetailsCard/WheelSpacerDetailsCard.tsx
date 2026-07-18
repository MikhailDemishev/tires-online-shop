//import type { Tire } from '@/entities/tire/model';
// import s from './WheelSpacerDetailsCard.module.scss';
// import { ProductCard } from '@/entities/product/ui/ProductCard';
// import clsx from 'clsx';
// import { ROUTES } from '@/app/router';
// type Props = {
//   tire: Tire;
//   className?: string;
// };

import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import type { WheelSpacer } from '@/entities/wheelSpacer/model';
import s from './WheelSpacerDetailsCard.module.scss';

type Props = {
  spacer: WheelSpacer;
  className?: string;
};

export const WheelSpacersDetailsCard = ({ spacer, className }: Props) => {
  const spacerCharacteristics = [
    {
      label: 'Название',
      value: spacer.title,
    },
    // Производителя нужно добавить в БД
    // {
    //   label: 'Производитель',
    //   value: wheelSpacer.manufacturer,
    // },
    {
      label: 'Разболтовка (PCD)',
      value: spacer.boltDistance,
    },
    {
      label: 'Резьба болтов',
      value: spacer.boltInfo,
    },
    {
      label: 'Толщина, мм',
      value: `${spacer.thickness}`,
    },
  ];
  return (
    <ProductDetailsCard
      product={spacer}
      title={spacer.productType}
      className={clsx(className, s.spacersDetailsCard)}
      characteristics={spacerCharacteristics}
    />
  );
};
