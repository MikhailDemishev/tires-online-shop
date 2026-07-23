import type { SortOptions } from '@/features/sort/model';

export const REVIEW_SORT_OPTIONS: SortOptions = {
  default: 'new',
  options: [
    {
      value: 'createdDate',
      label: 'новые',
      direction: 'desc',
    },
    {
      value: 'old',
      label: 'старые',
    },
    {
      value: 'asc',
      label: 'С высокой оценкой',
    },
    {
      value: 'desc',
      label: 'С низкой оценкой',
    },
  ],
};
