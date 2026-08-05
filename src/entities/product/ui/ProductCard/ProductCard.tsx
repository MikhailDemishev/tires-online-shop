import type { Product } from '@/entities/product/model';
import s from './ProductCard.module.scss';
import clsx from 'clsx';
import { Dots } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { AddToFavoritesBtn } from '@/features/favorite/ui/AddToFavoritesBtn';
import fallbackImage from '@/assets/images/fallbackProduct.jpg';
import { handleImageError } from '@/shared/lib/helpers';
import { useTranslation } from '@/shared/lib/hooks';

export type ProductCardProps = {
  product: Product;
  to: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export const ProductCard = ({
  product,
  to,
  title,
  className,
  children,
}: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <Link className={clsx(className, s.productCard)} to={to}>
      <AddToFavoritesBtn className={s.productCardFavorites} />
      <div className={s.imageWrapper}>
        <img
          className={s.image}
          src={product.url || fallbackImage}
          alt={product.title}
          onError={(event) => handleImageError(event, fallbackImage)}
        />
      </div>

      <div className={s.bottom}>
        <h3 className={s.title}>{title}</h3>
        {children}
        <div className={s.priceBlock}>
          <span className={s.price}>{product.price} zl.</span>
          <div className={s.stockBlock}>
            <div className={s.stockBlockUpper}>
              <span className={s.stockBlockQuantity}>
                {' '}
                {product.quantityInStock} {t('cards.productCard.pieces')}
              </span>
              <Dots className={s.stockBlockIcon} />
            </div>
            <span className={s.stockBlockDescription}>
              {t('cards.productCard.stock')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
