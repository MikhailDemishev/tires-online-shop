import type { Product } from '@/entities/product/model';
import s from './ProductCard.module.scss';
import clsx from 'clsx';
import { Dots } from '@/assets/icons';
import { Link } from 'react-router-dom';

export type ProductCardProps = {
  product: Product;
  to: string;
  children?: React.ReactNode;
  className?: string;
};

export const ProductCard = ({
  product,
  to,
  className,
  children,
}: ProductCardProps) => {
  return (
    <Link className={clsx(className, s.productCard)} to={to}>
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
    </Link>
  );
};
