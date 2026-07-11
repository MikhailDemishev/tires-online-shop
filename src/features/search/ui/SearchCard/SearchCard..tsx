import type { SearchProduct } from '@/features/search/model';
import s from './SearchCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { getProductPath } from '@/features/search/lib/helpers';
type Props = {
  searchProduct: SearchProduct;
};

export const SearchCard = ({ searchProduct }: Props) => {
  return (
    <ProductCard
      product={searchProduct}
      className={s.searchCard}
      to={getProductPath(searchProduct)}
    ></ProductCard>
  );
};
