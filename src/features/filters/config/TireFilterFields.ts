import type { FilterField } from '@/features/filters/model';

export const TireFilterFields: FilterField[] = [
  {
    name: 'width',
    placeholder: 'Ширина',
    options: [
      { value: '195', label: '195' },
      { value: '205', label: '205' },
      { value: '215', label: '215' },
      { value: '225', label: '225' },
      { value: '235', label: '235' },
      { value: '245', label: '245' },
      { value: '255', label: '255' },
      { value: '265', label: '265' },
      { value: '285', label: '285' },
    ],
  },
  {
    name: 'profile',
    placeholder: 'Профиль',
    options: [
      { value: '55', label: '55' },
      { value: '60', label: '60' },
      { value: '65', label: '65' },
      { value: '70', label: '70' },
      { value: '75', label: '75' },
      { value: '80', label: '80' },
      { value: '85', label: '85' },
    ],
  },
  {
    name: 'diameter',
    placeholder: 'Диаметр',
    options: [
      { value: '15', label: 'R15' },
      { value: '16', label: 'R16' },
      { value: '17', label: 'R17' },
      { value: '18', label: 'R18' },
    ],
  },
  {
    name: 'season',
    placeholder: 'Сезон',
    options: [{ value: 'All-Season', label: 'Всесезонные' }],
  },
];
