import type { SortOption } from '@/features/sort/model';

export const REVIEW_SORT_OPTIONS: SortOption[] = [
  {
    value: 'default',
    label: 'по умолчанию',
  },
  {
    value: 'rate-desc',
    searchParameter: 'rate',
    label: 'сначала высокие',
    direction: 'desc',
  },
  {
    value: 'rate-asc',
    searchParameter: 'rate',
    label: 'сначала низкие',
    direction: 'asc',
  },
  {
    value: 'date-desc',
    searchParameter: 'createdDate',
    label: 'сначала новые',
    direction: 'desc',
  },
  {
    value: 'date-asc',
    searchParameter: 'createdDate',
    label: 'сначала старые',
    direction: 'asc',
  },
];
