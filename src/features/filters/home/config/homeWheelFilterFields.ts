import type { HomeFilterField } from '@/features/filters/home/model';

export const homeWheelFilterFields: HomeFilterField[] = [
  {
    name: 'diameter',
    placeholder: 'Диаметр',
    options: [
      { value: '15', label: 'R15' },
      { value: '16', label: 'R16' },
      { value: '17', label: 'R17' },
    ],
  },
  {
    name: 'width',
    placeholder: 'Ширина',
    options: [
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8', label: '8' },
      { value: '10', label: '10' },
    ],
  },
  {
    name: 'boltSpacing',
    placeholder: 'Разболтовка',
    options: [
      { value: '5x114.3', label: '5×114.3' },
      { value: '5x127', label: '5×127' },
      { value: '5x130', label: '5×130' },
      { value: '5x139.7', label: '5×139.7' },
      { value: '6x114.3', label: '6×114.3' },
      { value: '6x139.7', label: '6×139.7' },
    ],
  },
  {
    name: 'et',
    placeholder: 'ET',
    options: [
      { value: '-50', label: '-50' },
      { value: '-40', label: '-40' },
      { value: '-35', label: '-35' },
      { value: '-25', label: '-25' },
      { value: '-15', label: '-15' },
      { value: '-10', label: '-10' },
      { value: '0', label: '0' },
      { value: '10', label: '10' },
      { value: '20', label: '20' },
    ],
  },
];
