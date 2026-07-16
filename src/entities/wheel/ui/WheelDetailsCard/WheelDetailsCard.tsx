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
  const wheelTitle = `${wheel.material} ${wheel.productType}`;
  const characteristics = [
    {
      label: 'Название',
      value: wheelTitle.toLocaleLowerCase(),
    },
    //производителя надо добавить в БД
    // {
    //   label: 'Производитель',
    //   value: 'Неизвестен',
    // },
    {
      label: 'Тип диска',
      value: `${wheel.typeOfWheel} `,
    },
    {
      label: 'Диаметр, дюйм',
      value: `${wheel.diameter}"`,
    },
    {
      label: 'Ширина, дюйм',
      value: `${wheel.width}"`,
    },
    {
      label: 'Вылет, ET',
      value: `${wheel.et} ET`,
    },
    {
      label: 'Центральное отверстие (DIA)',
      value: `${wheel.centralBoreDiameter} `,
    },
    {
      label: 'Разболтовка',
      value: `${wheel.boltSpacing} `,
    },
    {
      label: 'Материал',
      value: `${wheel.material} `,
    },
    {
      label: 'Цвет',
      value: `${wheel.color} `,
    },
  ];
  return (
    <ProductDetailsCard
      product={wheel}
      title={wheelTitle}
      className={clsx(className, s.tireDetailsCard)}
      characteristics={characteristics}
    />
  );
};
