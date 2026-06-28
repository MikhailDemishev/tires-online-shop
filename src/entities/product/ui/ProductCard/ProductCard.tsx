import type { Product } from '@/entities/product/model';
import s from './ProductCard.module.scss';
import clsx from 'clsx';

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
      <div className={s.productCard__imageWrapper}>
        <img
          className={s.productCard__image}
          src={product.url}
          alt={product.title}
        />
      </div>

      <div className={s.productCard__bottom}>
        <h3 className={s.productCard__title}>{product.title}</h3>
        {children}
        <span className={s.productCard__price}>{product.price} zl</span>
      </div>
    </div>
  );
};
