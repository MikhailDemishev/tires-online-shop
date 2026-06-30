import type { FilterField } from '@/features/filters/model';

export const WheelSpacerFilterFields: FilterField[] = [
  {
    name: 'boltDistance',
    placeholder: 'PCD',
    options: [
      { value: '5x114,3', label: '5×114,3' },
      { value: '5x127', label: '5×127' },
      { value: '5x139,7', label: '5×139,7' },
      { value: '6x114,3', label: '6×114,3' },
      { value: '6x139,7', label: '6×139,7' },
    ],
  },
  {
    name: 'boltInfo',
    placeholder: 'Центр. отверстие (DIA)',
    options: [
      { value: '1/2x20', label: '1/2×20' },
      { value: '12x1,25', label: '12×1,25' },
      { value: '12x1,5', label: '12×1,5' },
    ],
  },
  {
    name: 'thickness',
    placeholder: 'Толщина',
    options: [
      { value: '30', label: '30' },
      { value: '40', label: '40' },
    ],
  },
];
