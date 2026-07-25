import type { SortOption } from '@/features/sort/model';

export const PRODUCT_SORT_OPTIONS: SortOption[] = [
  {
    value: 'default',
    label: 'по умолчанию',
  },
  {
    value: 'recommended',
    searchParameter: 'recommended',
    label: 'популярные',
  },
  {
    value: 'price-asc',
    searchParameter: 'price',
    label: 'дешевле',
    direction: 'asc',
  },
  {
    value: 'price-desc',
    searchParameter: 'price',
    label: 'дороже',
    direction: 'desc',
  },
];
