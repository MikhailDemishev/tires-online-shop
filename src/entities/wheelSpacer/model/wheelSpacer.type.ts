export type WheelSpacer = {
  boltDistance: string;
  boltInfo: string;
  thickness: number;
  id: number;
  userId: string;
  title: string;
  titlePl: string;
  titleRu: string;
  productType: string;
  url: string;
  urls: string;
  inf: string;
  quantityInStock: number;
  inStock?: boolean;
  price: number;
  inArchive: boolean;
  createdDate: string;
};

export type WheelSpacerFullResponse = {
  content: WheelSpacer[];
  pageNumber: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
};

export type WheelSpacerDetails = WheelSpacer;
