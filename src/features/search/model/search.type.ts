export type SearchProductBase = {
  id: number;
  userId: string;
  title: string;
  titlePl: string;
  titleRu: string;
  url: string;
  urls: string;
  inf: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
  quantityInStock: number;
  price: number;
  inArchive: boolean;
  createdDate: string;
};

export type SearchProductTire = SearchProductBase & {
  productType: 'Tire';
  tt?: string;
  season?: string;
  typeOfTire?: string;
  manufacturer?: string;
  protector?: string;
  width?: number;
  speedIndex?: number | string;
  loadIndex?: number | string;
};

export type SearchProductWheel = SearchProductBase & {
  productType: 'Wheel';
  boltSpacing?: number | string;
  centralBoreDiameter?: number | string;
  color?: string;
  diameter?: number | string;
  et?: number | string;
  material?: string;
  weight?: number | string;
  width?: number | string;
};

export type SearchProductWheelSpacer = SearchProductBase & {
  productType: 'WheelSpacer';
  boltDistance?: number | string;
  boltInfo?: number | string;
  thickness?: number | string;
};

export type SearchProduct =
  | SearchProductTire
  | SearchProductWheel
  | SearchProductWheelSpacer;

export type SearchFullResponse = {
  content: SearchProduct[];
  pageNumber: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
};
