import type { TireDetails } from '@/entities/tire/model';
import s from './TireDetailsCard.module.scss';
import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import { matchSpeedIndexCode } from '@/entities/tire/lib/helpers';

type Props = {
  tire: TireDetails;
  className?: string;
};

export const TireDetailsCard = ({ tire, className }: Props) => {
  //сматчим буквенный код из цифрового индекса скорости
  const speedIndexCode = matchSpeedIndexCode(tire.speedIndex);
  const loadSpeedIndexCode = speedIndexCode
    ? `${tire.loadIndex}${speedIndexCode}`
    : '';

  const tireCharacteristics = [
    {
      label: 'Название',
      value: tire.title,
    },
    {
      label: 'Производитель',
      value: tire.manufacturer,
    },
    {
      label: 'Тип шины',
      value: tire.typeOfTire,
    },
    {
      label: 'Ширина, мм',
      value: `${tire.width}`,
    },
    {
      label: 'Профиль, %',
      value: `${tire.profile}`,
    },
    {
      label: 'Диаметр, дюйм',
      value: `${tire.diameter}"`,
    },
    {
      label: 'Сезонность',
      value: tire.season,
    },
    {
      label: 'Индекс нагрузки и скорости',
      value: loadSpeedIndexCode,
    },
  ];
  return (
    <ProductDetailsCard
      product={tire}
      title={tire.protector}
      className={clsx(className, s.tireDetailsCard)}
      characteristics={tireCharacteristics}
    />
  );
};
