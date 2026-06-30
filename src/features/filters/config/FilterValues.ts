import { ROUTES } from '@/app/router/paths';
import {
  TireFilterFields,
  WheelFilterFields,
  WheelSpacerFilterFields,
} from '@/features/filters/config';

export const FILTER_VALUES = {
  tires: {
    value: 'tires',
    route: ROUTES.tires,
    fields: TireFilterFields,
  },
  wheels: {
    value: 'wheels',
    route: ROUTES.wheels,
    fields: WheelFilterFields,
  },
  wheelSpacers: {
    value: 'wheelSpacers',
    route: ROUTES.wheelSpacers,
    fields: WheelSpacerFilterFields,
  },
} as const;
