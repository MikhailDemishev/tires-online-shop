import { type SortOption } from '@/features/sort/model';

export const findInitialSortValue = (
  sortOptions: SortOption[],
  searchParameter: string | null,
  searchDirection: string | null,
) => {
  if (!searchDirection) {
    return sortOptions.find(
      (option) => option.searchParameter === searchParameter,
    );
  }

  return sortOptions.find(
    (option) =>
      option.searchParameter === searchParameter &&
      option.direction === searchDirection,
  );
};
