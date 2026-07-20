//конфиг для полей фильтра по протектору

import type { NamedEntity } from '@/shared/model/namedEntity';
import {
  dakar,
  ecoDrive,
  mountain,
  ranger,
  sahara,
  specialTrack,
  tractionTrack,
  winterGrip,
} from '@/assets/images/protectorImages';

export type ProtectorOption = NamedEntity & {
  image: string;
};

export const protectors: ProtectorOption[] = [
  {
    id: 1,
    name: 'Dakar',
    image: dakar,
  },
  {
    id: 2,
    name: 'Ranger',
    image: ranger,
  },

  {
    id: 3,
    name: 'Sahara',
    image: sahara,
  },
  {
    id: 4,
    name: 'Special Track',
    image: specialTrack,
  },
  {
    id: 5,
    name: 'Mountain',
    image: mountain,
  },

  {
    id: 6,
    name: 'Traction Track',
    image: tractionTrack,
  },
  {
    id: 7,
    name: 'Winter Grip',
    image: winterGrip,
  },
  {
    id: 8,
    name: 'EcoDrive',
    image: ecoDrive,
  },
];
