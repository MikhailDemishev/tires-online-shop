import type { Tire } from '@/entities/tire/model';
import s from './TireDetailsCard.module.scss';
import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import { getLoadSpeedIndex } from '@/entities/product/lib/helpers';
import type { ProductDescription } from '@/entities/product/model';

type Props = {
  tire: Tire;
  title: string;
  t: (key: string) => string;
  className?: string;
};

export const TireDetailsCard = ({ tire, className, title, t }: Props) => {
  //сматчим буквенный код из цифрового индекса скорости с помощью хелпера
  const loadSpeedIndex = getLoadSpeedIndex(tire.loadIndex, tire.speedIndex);

  const tireCharacteristics = [
    {
      label: t('cards.productDetailCard.accordion.tires.protector'),
      value: tire.protector,
      className: 'bold',
    },
    {
      label: t('cards.productDetailCard.accordion.tires.manufacturer'),
      value: tire.manufacturer,
    },
    {
      label: t('cards.productDetailCard.accordion.tires.type'),
      value: tire.typeOfTire,
    },
    {
      label: t('cards.productDetailCard.accordion.tires.width'),
      value: `${tire.width}`,
    },
    {
      label: t('cards.productDetailCard.accordion.tires.profile'),
      value: `${tire.profile}`,
    },
    {
      label: t('cards.productDetailCard.accordion.tires.diameter'),
      value: `${tire.diameter}"`,
    },
    {
      label: t('cards.productDetailCard.accordion.tires.season'),
      value: tire.season,
    },
    {
      label: t('cards.productDetailCard.accordion.tires.loadSpeedIndex'),
      value: loadSpeedIndex,
    },
  ];

  const description: ProductDescription[] = [
    {
      label: '',
      value: tire.inf,
    },
  ];

  //  label: string;
  //   value: {
  //       en: string;
  //       pl: string;
  //       ru: string;
  //   };

  return (
    <ProductDetailsCard
      product={tire}
      title={title}
      className={clsx(className, s.tireDetailsCard)}
      characteristics={tireCharacteristics}
      description={description}
    />
  );
};
