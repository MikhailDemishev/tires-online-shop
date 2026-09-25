import type {
  ProductCharacteristic,
  ProductDescription,
  ProductDetails,
} from '@/entities/product/model';
import s from './ProductDetailsCard.module.scss';
import clsx from 'clsx';
import fallbackImage from '@/assets/images/fallbackProduct.jpg';
import {
  ProductGallery,
  ProductGalleryMobile,
} from '@/entities/product/ui/ProductGallery';
import { InStockIndicator } from '@/shared/ui/InStockIndicator';
import { Button } from '@/shared/ui/Button';
import { ProductAccordion } from '@/entities/product/ui/ProductAccordion';
import { useTranslation } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/app/store';
import { openModal } from '@/app/store/slices';

type ProductDetailsCardProps = {
  product: ProductDetails;
  title: string;
  characteristics: ProductCharacteristic[];
  description: ProductDescription[];
  className?: string;
};

export const ProductDetailsCard = ({
  product,
  title,
  className,
  characteristics,
  description,
}: ProductDetailsCardProps) => {
  const inStock = product.quantityInStock > 0;

  const { t } = useTranslation();

  //temp open contactform
  const dispatch = useAppDispatch();

  //temp
  //const inStock = false;
  return (
    <section className={clsx(className, s.productDetailsCard)}>
      <ProductGallery
        url={product.url}
        urls={product.urls}
        fallbackImage={fallbackImage}
        inStock={inStock}
        className={s.galleryDesktop}
      />

      <div className={s.cardInfo}>
        <div className={s.cardHeader}>
          <div className={s.cardHeaderTop}>
            <Text as={'h1'} variant="h1" className={s.cardTitle}>
              {title}
            </Text>
            <InStockIndicator inStock={inStock} />
          </div>
          <ProductGallery
            url={product.url}
            urls={product.urls}
            fallbackImage={fallbackImage}
            inStock={inStock}
            className={s.galleryTablet}
          />
          <ProductGalleryMobile
            url={product.url}
            urls={product.urls}
            fallbackImage={fallbackImage}
            inStock={inStock}
            className={s.galleryMobile}
          />
          <div className={s.cardHeaderBottom}>
            {inStock ? (
              <Button
                className={s.cardButton}
                onClick={() => dispatch(openModal({ type: 'SupportRequest' }))}
              >
                {t('cards.submitRequest')}
              </Button>
            ) : (
              <span>{t('cards.notInStock')}</span>
            )}

            <Text variant="h2" className={s.cardPrice}>
              {product.price} <span>zł</span>
            </Text>
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
