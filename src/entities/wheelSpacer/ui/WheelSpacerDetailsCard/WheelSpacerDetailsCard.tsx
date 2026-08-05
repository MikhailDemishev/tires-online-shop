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
import { useTranslation } from '@/shared/lib/hooks';

type Props = {
  spacer: WheelSpacer;
  className?: string;
};

export const WheelSpacersDetailsCard = ({ spacer, className }: Props) => {
  const { t } = useTranslation();
  const spacerCharacteristics = [
    {
      label: t('cards.productDetailCard.accordion.wheelSpacers.name'),
      value: spacer.title,
    },
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
  const description = [
    {
      label: '',
      value: spacer.inf || 'Нет данных',
    },
  ];
  return (
    <ProductDetailsCard
      product={spacer}
      title={spacer.productType}
      className={clsx(className, s.spacersDetailsCard)}
      characteristics={spacerCharacteristics}
      description={description}
    />
  );
};
