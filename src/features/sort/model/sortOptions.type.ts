// Если для дефолтной опции сортировка не должна попадать в URL,
// не указывайте searchParameter.
export type SortOption = {
  value: string;
  searchParameter?: string;
  label: string;
  direction?: string;
};

export type SortOptions = {
  default: string;
  options: SortOption[];
};
