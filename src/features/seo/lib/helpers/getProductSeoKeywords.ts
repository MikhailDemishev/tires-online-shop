import type { Tire } from '@/entities/tire/model';
import type { Wheel } from '@/entities/wheel/model';
import type { WheelSpacer } from '@/entities/wheelSpacer/model';
import type { ProductSeoType } from '../../model';

type Translate = (key: string) => string;

export const getProductSeoKeywords = (
  product: Tire | Wheel | WheelSpacer | undefined,
  type: ProductSeoType,
  t: Translate,
) => {
  switch (type) {
    case 'tire': {
      const tire = product as Tire | undefined;

      const manufacturer = tire?.manufacturer;
      const protector = tire?.protector;

      const size =
        tire?.width && tire?.profile && tire?.diameter
          ? `${tire.width}/${tire.profile} R${tire.diameter}`
          : undefined;

      return [
        t('pages.tires.seo.keywords.base'),

        manufacturer && protector && `${manufacturer} ${protector}`,

        manufacturer &&
          size &&
          `${t('pages.tires.seo.keywords.sizePrefix')}${manufacturer} ${size}`,
      ]
        .filter(Boolean)
        .join(', ');
    }

    case 'wheel': {
      const wheel = product as Wheel | undefined;

      const size =
        wheel?.diameter && wheel?.width
          ? `${wheel.diameter}x${wheel.width}`
          : undefined;

      const boltSpacing = wheel?.boltSpacing;
      const et = wheel?.et;

      const prefix = t('pages.wheels.seo.keywords.wheelPrefix');
      const suffix = t('pages.wheels.seo.keywords.wheelSuffix');

      return [
        t('pages.wheels.seo.keywords.base'),

        size && `${prefix}${size}${suffix}`,

        boltSpacing &&
          `${prefix}${boltSpacing}${et ? ` ET${et}` : ''}${suffix}`,
      ]
        .filter(Boolean)
        .join(', ');
    }

    case 'wheelSpacer': {
      const spacer = product as WheelSpacer | undefined;

      const prefix = t('pages.wheelSpacers.seo.keywords.dynamicPrefix');

      const suffix = t('pages.wheelSpacers.seo.keywords.dynamicSuffix');

      const unit = t('pages.wheelSpacers.seo.keywords.thicknessUnit');

      return [
        t('pages.wheelSpacers.seo.keywords.base'),

        spacer?.boltDistance &&
          spacer?.thickness &&
          `${prefix}${spacer.boltDistance} ${spacer.thickness} ${unit}${suffix}`,
      ]
        .filter(Boolean)
        .join(', ');
    }
  }
};
