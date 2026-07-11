export type Wheel = {
  id: number;
  userId: string;
  title: string;
  titlePl: string;
  titleRu: string;
  typeOfWheel: string;
  diameter: number;
  width: number;
  centralBoreDiameter: number;
  boltSpacing: string;
  et: number;
  color: string;
  material: string;
  weight: number;
  productType: string;
  url: string;
  urls: string;
  inf: string;
  price: number;
  quantityInStock: number;
  inStock: boolean;
  createdDate: string;
};
export type WheelFullResponse = {
  content: Wheel[];
  pageNumber: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
};

export type WheelDetails = Wheel;
