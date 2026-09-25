//import type { Tire } from '@/entities/tire/model';

// import { ProductCard } from '@/entities/product/ui/ProductCard';
// import clsx from 'clsx';
// import { ROUTES } from '@/app/router';

import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import type { Wheel } from '@/entities/wheel/model';
import s from './WheelDetailsCard.module.scss';
import type { ProductDescription } from '@/entities/product/model';

type Props = {
  wheel: Wheel;
  title: string;
  t: (key: string) => string;
  className?: string;
};

export const WheelDetailsCard = ({ wheel, className, t, title }: Props) => {
  console.log('wheeltest', wheel);
  const wheelCharacteristics = [
    //производителя надо добавить в БД
    // {
    //   label: t('cards.productDetailCard.accordion.wheels.manufacturer'),
    //   value: 'Неизвестен',
    // },
    {
      label: t('cards.productDetailCard.accordion.wheels.type'),
      value: `${wheel.typeOfWheel} `,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.diameter'),
      value: `${wheel.diameter}"`,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.width'),
      value: `${wheel.width}"`,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.et'),
      value: `${wheel.et} ET`,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.dia'),
      value: `${wheel.centralBoreDiameter} `,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.pcd'),
      value: `${wheel.boltSpacing} `,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.material'),
      value:
        wheel.material && wheel.material !== '-'
          ? t(
              `cards.productDetailCard.wheel.details.material.${wheel.material}`,
            )
          : '-',
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.color'),
      value:
        wheel.color && wheel.color !== '-'
          ? t(`cards.productDetailCard.wheel.details.color.${wheel.color}`)
          : '-',
    },
  ];

  const description: ProductDescription[] = [
    {
      label: '',
      value: wheel.inf,
    },
  ];
  return (
    <ProductDetailsCard
      product={wheel}
      title={title}
      className={clsx(className, s.tireDetailsCard)}
      characteristics={wheelCharacteristics}
      description={description}
    />
  );
};
