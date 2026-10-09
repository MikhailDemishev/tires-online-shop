import { getLoadSpeedIndex } from '@/entities/product/lib/helpers';
import type { Tire } from '@/entities/tire/model';
import type { Wheel } from '@/entities/wheel/model';
import type { WheelSpacer } from '@/entities/wheelSpacer/model';

export const getProductTitle = (
  product: Tire | Wheel | WheelSpacer,
  t: (key: string) => string,
) => {
  switch (product.productType) {
    case 'Tire': {
      const tire = product as Tire;
      const loadIndex = getLoadSpeedIndex(tire.loadIndex, tire.speedIndex);
      return `${tire.manufacturer} ${tire.width}/${tire.profile} R${tire.diameter} ${loadIndex}${
        tire.offroadUsingType
          ? ` ${t('cards.productDetailCard.tire.offRoad.yes')}`
          : ''
      } `;
    }

    case 'Wheel': {
      const wheel = product as Wheel;
      const material =
        wheel.material?.trim() && wheel.material.trim() !== '-'
          ? t(`cards.productDetailCard.wheel.material.${wheel.material.trim()}`)
          : t('cards.productDetailCard.wheel.material.noMaterial');

      return `${material} ${wheel.diameter}" ${wheel.boltSpacing}`;
    }

    case 'WheelSpacer':
    case 'SPACER': {
      const spacer = product as WheelSpacer;
      return `${t('cards.productDetailCard.wheelSpacer.name')} ${
        spacer.boltDistance
      } – ${spacer.thickness} ${t('cards.productDetailCard.wheelSpacer.mm')}`;
    }

    default:
      return '';
  }
};
