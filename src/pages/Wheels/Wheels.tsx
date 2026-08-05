import s from './Wheels.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useGetWheelsQuery } from '@/entities/wheel/api';
import { WheelCard } from '@/entities/wheel/ui/WheelCard';
import type { WheelParams } from '@/entities/wheel/model';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
export const Wheels = () => {
  const params = usePaginationParams<WheelParams>();

  const { data, isLoading, isError } = useGetWheelsQuery(params);
  const wheels = data?.content;

  return (
    <ProductPageLayout
      title="pages.wheels.title"
      className={s.wheelsPage}
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      category={{
        label: 'pages.wheels.title',
      }}
      filterType="wheels"
      isEmpty={!wheels?.length}
      isError={isError}
      isLoading={isLoading}
    >
      <ProductGrid
        items={wheels ?? []}
        getKey={(wheel) => wheel.id}
        renderItem={(wheel) => <WheelCard wheel={wheel} />}
      />
    </ProductPageLayout>
  );
};
