import type { SortOption } from '@/features/sort/model';

export const REVIEW_SORT_OPTIONS: SortOption[] = [
  {
    value: 'default',
    label: 'feedback.sort.default',
  },
  {
    value: 'rate-desc',
    searchParameter: 'rate',
    label: 'feedback.sort.highest',
    direction: 'desc',
  },
  {
    value: 'rate-asc',
    searchParameter: 'rate',
    label: 'feedback.sort.lowest',
    direction: 'asc',
  },
  {
    value: 'date-desc',
    searchParameter: 'createdDate',
    label: 'feedback.sort.newest',
    direction: 'desc',
  },
  {
    value: 'date-asc',
    searchParameter: 'createdDate',
    label: 'feedback.sort.oldest',
    direction: 'asc',
  },
];
