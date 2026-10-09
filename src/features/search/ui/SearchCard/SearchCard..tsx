import type { SearchProduct } from '@/features/search/model';
import s from './SearchCard.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { getProductPath } from '@/features/search/lib/helpers';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';
import { getProductTitle } from '@/entities/product/lib/helpers';
type Props = {
  searchProduct: SearchProduct;
};

export const SearchCard = ({ searchProduct }: Props) => {
  const { t } = useTranslation();
  const cardTitle = getProductTitle(searchProduct, t);

  console.log(cardTitle, cardTitle);

  return (
    <ProductCard
      product={searchProduct}
      className={s.searchCard}
      title={cardTitle}
      to={getProductPath(searchProduct)}
    >
      <Text variant="ultraSmall">
        {(searchProduct.productType === 'Tire' && searchProduct.protector) ??
          ''}
      </Text>
    </ProductCard>
  );
};
