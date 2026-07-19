import { CooperTires, GoodRich, Maxxis, Toyo, Yokohama } from '@/assets/icons';

export const GUARANTEE_BRANDS = [
  {
    id: 1,
    icon: GoodRich,
    text: '3 года',
  },
  {
    id: 2,
    icon: CooperTires,
    text: '2 года',
  },
  {
    id: 3,
    icon: Maxxis,
    text: '5 лет',
  },
  {
    id: 4,
    icon: Yokohama,
    text: '3 года',
  },
  {
    id: 5,
    icon: Toyo,
    text: '4 года',
  },
] as const;
