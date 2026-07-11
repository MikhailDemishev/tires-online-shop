import type { Product } from '@/entities/product/model';
import s from './ProductDetailsCard.module.scss';
import clsx from 'clsx';

export type ProductCharacteristic = {
  label: string;
  value: React.ReactNode;
};

type ProductDetailsCardProps = {
  product: Product;
  characteristics?: ProductCharacteristic[];
  className?: string;
};

export const ProductDetailsCard = ({
  product,
  className,
  characteristics,
}: ProductDetailsCardProps) => {
  console.log(characteristics);
  return (
    <div className={clsx(className, s.productDetailsCard)}>
      <h2 className={s.title}>Заголовок карточки: {product.title}</h2>
      <section className={s.characteristics}>
        <h3 className={s.sectionTitle}>Характеристики</h3>

        {/* <ul className={s.characteristicsList}>
            {characteristics.map(({ label, value }) => (
              <li key={label} className={s.characteristic}>
                <p className={s.characteristicLabel}>{label}</p>
                <p className={s.characteristicValue}>{value}</p>
              </li>
            ))}
          </ul> */}
      </section>
    </div>
  );
};

{
  /* <ProductDetails
  product={wheel}
  characteristics={[
    { label: 'Ширина', value: wheel.width },
    { label: 'Диаметр', value: `${wheel.diameter}"` },
    { label: 'DIA', value: wheel.dia },
    { label: 'PCD', value: wheel.pcd },
    { label: 'Материал', value: wheel.material },
  ]}
/> */
}
