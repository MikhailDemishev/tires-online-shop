import s from './Wheels.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useGetWheelsQuery } from '@/entities/wheel/api';
import { WheelCard } from '@/entities/wheel/ui/WheelCard';
export const Wheels = () => {
  const { data, isLoading, isError, error } = useGetWheelsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ProductPageLayout title="Wheels" className={s.wheelsPage}>
      <ProductGrid
        items={data ?? []}
        getKey={(wheel) => wheel.id}
        renderItem={(wheel) => <WheelCard wheel={wheel} />}
      />
    </ProductPageLayout>
  );
};
