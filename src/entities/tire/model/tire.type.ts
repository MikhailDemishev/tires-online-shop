export type Tire = {
  id: number;
  title: string;
  titlePl: string;
  titleRu: string;
  typeOfTire: string;
  productType: string;
  icVc: string;
  diameter: number;
  width: number;
  profile: number;
  manufacturer: string;
  season: string;
  url: string;
  urls: string;
  inf: string;
  quantityInStock: number;
  inStock?: boolean;
  price: number;
  protector: string;
  speedIndex: number;
  loadIndex: string;
  offroadUsingType: string;
};

export type TireFullResponse = {
  content: Tire[];
  pageNumber: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
};
