import type { Product } from '@/entities/product/model';
import s from './ProductCard.module.scss';
import clsx from 'clsx';
import { Dots } from '@/assets/icons';

export type ProductCardProps = {
  product: Product;
  children?: React.ReactNode;
  className?: string;
};

export const ProductCard = ({
  product,
  className,
  children,
}: ProductCardProps) => {
  return (
    <div className={clsx(className, s.productCard)}>
      <div className={s.imageWrapper}>
        <img className={s.image} src={product.url} alt={product.title} />
      </div>

      <div className={s.bottom}>
        <h3 className={s.title}>{product.title}</h3>
        {children}
        <div className={s.priceBlock}>
          <span className={s.price}>{product.price} zl.</span>
          <div className={s.stockBlock}>
            <div className={s.stockBlockUpper}>
              <span className={s.stockBlockQuantity}> {product.price} шт.</span>
              <Dots className={s.stockBlockIcon} />
            </div>
            <span className={s.stockBlockDescription}>Остаток на складе</span>
          </div>
        </div>
      </div>
    </div>
  );
};
