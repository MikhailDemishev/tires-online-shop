import {
  MountainBrand,
  TractionBrand,
  DakarBrand,
  CSTBrand,
  CEATBrand,
} from '@/assets/icons';

export const BRANDS = [
  {
    id: 1,
    name: 'Dakar',
    Icon: DakarBrand,
  },
  {
    id: 2,
    name: 'Mountain',
    Icon: MountainBrand,
  },
  {
    id: 3,
    name: 'Traction',
    Icon: TractionBrand,
  },

  {
    id: 4,
    name: 'CST',
    Icon: CSTBrand,
  },
  {
    id: 5,
    name: 'CEAT',
    Icon: CEATBrand,
  },
] as const;
