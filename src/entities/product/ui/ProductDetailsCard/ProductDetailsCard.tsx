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

type ProductDetailsCardProps = {
  product: ProductDetails;
  title: string;
  characteristics: ProductCharacteristic[];
  className?: string;
};

export const ProductDetailsCard = ({
  product,
  title,
  className,
  characteristics,
}: ProductDetailsCardProps) => {
  console.log(characteristics);
  return (
    <section className={clsx(className, s.productDetailsCard)}>
      <div className={s.productDetailsCardGallery}>
        <ProductGalleryDesktop
          url={product.url}
          urls={product.urls}
          fallbackImage={fallbackImage}
        />
      </div>
      <div className={s.cardInfo}>
        <div className={s.cardHeader}>
          <div className={s.cardHeaderTop}>
            <div className={s.cardHeaderTopLeft}>
              <h2 className={s.cardTitle}>{title}</h2>
              <InStockIndicator quantityInStock={product.quantityInStock} />
            </div>
            <div className={s.cardHeaderTopRight}>
              <p className={s.cardPrice}>
                {product.price} <span>zł.</span>
              </p>
            </div>
          </div>
          <Button className={s.cardButton}>
            Добавить в корзину: {product.price} zł.
          </Button>
        </div>
        <ProductAccordion characteristics={characteristics} />
      </div>
    </section>
  );
};
