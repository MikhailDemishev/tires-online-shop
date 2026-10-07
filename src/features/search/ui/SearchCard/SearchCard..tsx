import type { SearchProduct } from '@/features/search/model';
import s from './SearchCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { getProductPath } from '@/features/search/lib/helpers';
import { Text } from '@/shared/ui/Text';
type Props = {
  searchProduct: SearchProduct;
};

export const SearchCard = ({ searchProduct }: Props) => {
  const cardTitle = searchProduct.title.replace(/\s*\([^)]*\)\s*$/, '');

  console.log(cardTitle, cardTitle);

  const getTireProtectorName = (title: string) =>
    title.match(/\(([^)]+)\)/)?.[1] ?? '';
  return (
    <ProductCard
      product={searchProduct}
      className={s.searchCard}
      title={cardTitle}
      to={getProductPath(searchProduct)}
    >
      <Text variant="ultraSmall">
        {searchProduct.productType === 'Tire' &&
          getTireProtectorName(searchProduct.title)}
      </Text>
    </ProductCard>
  );
};
