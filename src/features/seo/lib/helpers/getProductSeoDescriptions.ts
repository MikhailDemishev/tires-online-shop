import { getProductTitle } from '@/entities/product/lib/helpers';
import type { Tire } from '@/entities/tire/model';
import type { Wheel } from '@/entities/wheel/model';
import type { WheelSpacer } from '@/entities/wheelSpacer/model';
import type { ProductSeoType } from '../../model';

type Translate = (key: string) => string;

export const getProductSeoDescription = (
  product: Tire | Wheel | WheelSpacer | undefined,
  type: ProductSeoType,
  t: Translate,
) => {
  if (!product) return '';

  switch (type) {
    case 'tire': {
      const tire = product as Tire;

      const name = getProductTitle(tire, t);
      const protector = tire.protector;
      const price = tire.price;

      return [
        name,
        protector,
        t('pages.tires.seo.description.productType'),
        price,
        t('pages.tires.seo.description.currency'),
        t('pages.tires.seo.description.text'),
      ]
        .filter(Boolean)
        .join(' ');
    }

    case 'wheel': {
      const wheel = product as Wheel;

      const material =
        wheel.material && wheel.material !== '-'
          ? t(
              `cards.productDetailCard.wheel.details.material.${wheel.material}`,
            )
          : '';

      const size =
        wheel.diameter && wheel.width ? `${wheel.diameter}x${wheel.width}` : '';

      const boltSpacing = wheel.boltSpacing;
      const et = wheel.et;
      const price = wheel.price;

      const productType = t('pages.wheels.seo.description.productType');

      return [
        material,
        productType,
        size,
        boltSpacing ? `${boltSpacing},` : '',
        et ? `ET${et}` : '',
        price ? `– ${price}` : '',
        t('pages.wheels.seo.description.currency'),
        t('pages.wheels.seo.description.text'),
      ]
        .filter(Boolean)
        .join(' ');
    }

    case 'wheelSpacer': {
      const spacer = product as WheelSpacer;

      return [
        t('pages.wheelSpacers.seo.description.productType'),
        spacer.boltDistance ? `${spacer.boltDistance},` : '',
        spacer.thickness,
        spacer.thickness
          ? t('pages.wheelSpacers.seo.description.thicknessUnit')
          : '',
        spacer.boltInfo
          ? `${t('pages.wheelSpacers.seo.description.thread')} ${spacer.boltInfo}`
          : '',
        spacer.price ? `– ${spacer.price}` : '',
        t('pages.wheelSpacers.seo.description.currency'),
        t('pages.wheelSpacers.seo.description.text'),
      ]
        .filter(Boolean)
        .join(' ');
    }
  }
};
