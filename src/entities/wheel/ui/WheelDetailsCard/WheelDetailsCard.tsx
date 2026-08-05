//import type { Tire } from '@/entities/tire/model';

// import { ProductCard } from '@/entities/product/ui/ProductCard';
// import clsx from 'clsx';
// import { ROUTES } from '@/app/router';

import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import type { Wheel } from '@/entities/wheel/model';
import s from './WheelDetailsCard.module.scss';
import { useTranslation } from '@/shared/lib/hooks';

type Props = {
  wheel: Wheel;
  className?: string;
};

export const WheelDetailsCard = ({ wheel, className }: Props) => {
  const wheelTitle = `${wheel.material} ${wheel.productType}`;
  const { t } = useTranslation();

  const wheelCharacteristics = [
    {
      label: t('cards.productDetailCard.accordion.wheels.name'),
      value: wheelTitle.toLocaleLowerCase(),
    },
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
      value: `${wheel.material} `,
    },
    {
      label: t('cards.productDetailCard.accordion.wheels.color'),
      value: `${wheel.color} `,
    },
  ];

  const description = [
    {
      label: '',
      value: wheel.inf || 'Нет данных',
    },
  ];
  return (
    <ProductDetailsCard
      product={wheel}
      title={wheelTitle}
      className={clsx(className, s.tireDetailsCard)}
      characteristics={wheelCharacteristics}
      description={description}
    />
  );
};
