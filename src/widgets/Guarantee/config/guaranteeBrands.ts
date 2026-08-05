import { CooperTires, GoodRich, Maxxis, Toyo, Yokohama } from '@/assets/icons';

export const GUARANTEE_BRANDS = [
  {
    id: 1,
    icon: GoodRich,
    text: 'pages.guarantee.guaranteeBrands.items.goodrich',
  },
  {
    id: 2,
    icon: CooperTires,
    text: 'pages.guarantee.guaranteeBrands.items.cooper',
  },
  {
    id: 3,
    icon: Maxxis,
    text: 'pages.guarantee.guaranteeBrands.items.maxxis',
  },
  {
    id: 4,
    icon: Yokohama,
    text: 'pages.guarantee.guaranteeBrands.items.yokohama',
  },
  {
    id: 5,
    icon: Toyo,
    text: 'pages.guarantee.guaranteeBrands.items.toyo',
  },
] as const;
