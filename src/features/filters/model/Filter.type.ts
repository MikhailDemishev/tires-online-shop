import { FILTER_VALUES } from '@/features/filters/config';

export type ProductFilterType =
  (typeof FILTER_VALUES)[keyof typeof FILTER_VALUES]['value'];
