export type SearchProduct = {
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
  price: number;
  inArchive: boolean;
  createdDate: string;
};

export type SearchFullResponse = {
  content: SearchProduct[];
  pageNumber: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
};
