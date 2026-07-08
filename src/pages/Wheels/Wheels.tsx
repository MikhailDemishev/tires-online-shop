import s from './Wheels.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useGetWheelsQuery } from '@/entities/wheel/api';
import { WheelCard } from '@/entities/wheel/ui/WheelCard';
import type { WheelParams } from '@/entities/wheel/model';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
export const Wheels = () => {
  const params = usePaginationParams<WheelParams>();

  const { data, isLoading, isError, error } = useGetWheelsQuery(params);
  const wheels = data?.content;
  console.log('wheels', wheels);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ProductPageLayout
      title="Wheels"
      className={s.wheelsPage}
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      filterType="wheels"
      isEmpty={!wheels?.length}
    >
      <ProductGrid
        items={wheels ?? []}
        getKey={(wheel) => wheel.id}
        renderItem={(wheel) => <WheelCard wheel={wheel} />}
      />
    </ProductPageLayout>
  );
};
