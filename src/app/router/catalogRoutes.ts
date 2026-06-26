import { Tires } from '@/pages/Tires';
import { ROUTES } from './paths';
import { WheelSpacers } from '@/pages/WheelSpacers';
import { Wheels } from '@/pages/Wheels';

export const catalogRoutes = [
  {
    label: 'Шины 4x4',
    path: ROUTES.tires,
    component: Tires,
  },
  {
    label: 'Диски',
    path: ROUTES.wheels,
    component: Wheels,
  },
  {
    label: 'Дисковые проставки',
    path: ROUTES.wheelSpacers,
    component: WheelSpacers,
  },
];
