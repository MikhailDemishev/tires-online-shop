export type ProductDetails = {
  id: string | number;
  title: string;
  url: string;
  urls: string;
  price: number;
  quantityInStock: number;
  inStock?: boolean;
};
