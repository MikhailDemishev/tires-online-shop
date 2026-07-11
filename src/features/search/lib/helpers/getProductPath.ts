import { ROUTES } from '@/app/router';
import type { SearchProduct } from '@/features/search/model';

export const getProductPath = (searchProduct: SearchProduct) => {
  switch (searchProduct.productType) {
    case 'Tire':
      return `${ROUTES.tires}/${searchProduct.id}`;

    case 'Wheel':
      return `${ROUTES.wheels}/${searchProduct.id}`;

    case 'SPACER':
      return `${ROUTES.wheelSpacers}/${searchProduct.id}`;

    default:
      return ROUTES.home;
  }
};
