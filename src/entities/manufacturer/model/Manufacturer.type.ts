import type { NamedEntity } from '@/shared/model/namedEntity';

export type Manufacturer = NamedEntity & {
  description: string;
  url: string;
  createdDate: string;
};
