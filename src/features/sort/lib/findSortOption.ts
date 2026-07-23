import { type SortOption } from '@/features/sort/model';

export const findSortOption = (sortOptions: SortOption[], value: string) => {
  return sortOptions.find((option) => option.value === value);
};
