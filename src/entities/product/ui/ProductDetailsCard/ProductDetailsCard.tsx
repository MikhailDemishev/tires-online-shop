import type {
  ProductCharacteristic,
  ProductDetails,
} from '@/entities/product/model';
import s from './ProductDetailsCard.module.scss';
import clsx from 'clsx';
import fallbackImage from '@/assets/images/fallbackProduct.jpg';
import { ProductGalleryDesktop } from '@/entities/product/ui/ProductGallery';
import { InStockIndicator } from '@/shared/ui/InStockIndicator';
import { Button } from '@/shared/ui/Button';
import { ProductAccordion } from '@/entities/product/ui/ProductAccordion';
import { AddToFavoritesBtn } from '@/features/favorite/ui/AddToFavoritesBtn';
import { useTranslation } from '@/shared/lib/hooks';

type ProductDetailsCardProps = {
  product: ProductDetails;
  title: string;
  characteristics: ProductCharacteristic[];
  description: ProductCharacteristic[];
  className?: string;
};

export const ProductDetailsCard = ({
  product,
  title,
  className,
  characteristics,
  description,
}: ProductDetailsCardProps) => {
  console.log(characteristics);
  const inStock = product.quantityInStock > 0;

  const { t } = useTranslation();

  //temp
  //const inStock = false;
  return (
    <section className={clsx(className, s.productDetailsCard)}>
      <div className={s.productDetailsCardGallery}>
        <ProductGalleryDesktop
          url={product.url}
          urls={product.urls}
          fallbackImage={fallbackImage}
          inStock={inStock}
        />
        <AddToFavoritesBtn className={s.productDetailsCardFavorites} />
      </div>
      <div className={s.cardInfo}>
        <div className={s.cardHeader}>
          <div className={s.cardHeaderTop}>
            <h2 className={s.cardTitle}>{title}</h2>
            <InStockIndicator inStock={inStock} />
          </div>
          <div className={s.cardHeaderBottom}>
            {inStock ? (
              <Button className={s.cardButton}>{t('cards.addToCart')}</Button>
            ) : (
              <span>{t('cards.notInStock')}</span>
            )}

            <p className={s.cardPrice}>
              {product.price} <span>zł.</span>
            </p>
          </div>
        </div>
        <ProductAccordion
          characteristics={characteristics}
          description={description}
        />
      </div>
    </section>
  );
};
