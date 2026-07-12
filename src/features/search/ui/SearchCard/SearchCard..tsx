import type { SearchProduct } from '@/features/search/model';
import s from './SearchCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { getProductPath } from '@/features/search/lib/helpers';
type Props = {
  searchProduct: SearchProduct;
};

export const SearchCard = ({ searchProduct }: Props) => {
  const cardTitle = searchProduct.title.replace(/\s*\([^)]*\)\s*$/, '');

  const getTireProtectorName = (title: string) =>
    title.match(/\(([^)]+)\)/)?.[1] ?? '';
  console.log('productType', searchProduct.productType);
  return (
    <ProductCard
      product={searchProduct}
      className={s.searchCard}
      title={cardTitle}
      to={getProductPath(searchProduct)}
    >
      <p className={s.text}>
        {searchProduct.productType === 'Tire' &&
          getTireProtectorName(searchProduct.title)}
      </p>
    </ProductCard>
  );
};
