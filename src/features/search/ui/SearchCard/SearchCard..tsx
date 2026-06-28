import type { SearchProduct } from '@/features/search/model';
import s from './SearchCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
type Props = {
  searchProduct: SearchProduct;
};

export const SearchCard = ({ searchProduct }: Props) => {
  return (
    <ProductCard product={searchProduct} className={s.searchCard}></ProductCard>
  );
};
