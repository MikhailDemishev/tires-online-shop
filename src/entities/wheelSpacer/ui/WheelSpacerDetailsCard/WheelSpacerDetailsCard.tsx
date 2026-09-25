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
import type { ProductDescription } from '@/entities/product/model';

type Props = {
  spacer: WheelSpacer;
  title: string;
  t: (key: string) => string;
  className?: string;
};

export const WheelSpacersDetailsCard = ({
  spacer,
  className,
  t,
  title,
}: Props) => {
  console.log(spacer);
  const spacerCharacteristics = [
    // Производителя нужно добавить в БД
    // {
    //   label: 'Производитель',
    //   value: wheelSpacer.manufacturer,
    // },
    {
      label: t('cards.productDetailCard.accordion.wheelSpacers.pcd'),
      value: spacer.boltDistance,
    },
    {
      label: t('cards.productDetailCard.accordion.wheelSpacers.boltThread'),
      value: spacer.boltInfo,
    },
    {
      label: t('cards.productDetailCard.accordion.wheelSpacers.thickness'),
      value: `${spacer.thickness}`,
    },
  ];
  const description: ProductDescription[] = [
    {
      label: '',
      value: spacer.inf,
    },
  ];
  return (
    <ProductDetailsCard
      product={spacer}
      title={title}
      className={clsx(className, s.spacersDetailsCard)}
      characteristics={spacerCharacteristics}
      description={description}
    />
  );
};
