import type { TireDetails } from '@/entities/tire/model';
import s from './TireDetailsCard.module.scss';
import { ProductDetailsCard } from '@/entities/product/ui/ProductDetailsCard';
import clsx from 'clsx';
import { matchSpeedIndexCode } from '@/entities/tire/lib/helpers';
import { useTranslation } from '@/shared/lib/hooks';

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

  const { t } = useTranslation();

  const tireCharacteristics = [
    {
      label: t('cards.productDetailCard.accordion.tires.name'),
      value: tire.title,
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
      value: loadSpeedIndexCode,
    },
  ];

  const description = [
    {
      label: '',
      value: tire.inf || 'Нет данных',
    },
  ];
  return (
    <ProductDetailsCard
      product={tire}
      title={tire.protector}
      className={clsx(className, s.tireDetailsCard)}
      characteristics={tireCharacteristics}
      description={description}
    />
  );
};
