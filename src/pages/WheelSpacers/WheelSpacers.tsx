import s from './WheelSpacers.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useGetWheelSpacersQuery } from '@/entities/wheelSpacer/api';
import { WheelSpacerCard } from '@/entities/wheelSpacer/ui/WheelSpacerCard';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import type { WheelSpacerParams } from '@/entities/wheelSpacer/model';
export const WheelSpacers = () => {
  const params = usePaginationParams<WheelSpacerParams>();
  const { data, isLoading, isError, error } = useGetWheelSpacersQuery(params);
  const wheelSpacers = data?.content;
  console.log(data?.content, 'spacers');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ProductPageLayout
      title="WheelSpacers"
      filterType="wheelSpacers"
      className={s.wheelSpacersPage}
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      category={{
        label: 'Проставки',
      }}
      isEmpty={!wheelSpacers?.length}
    >
      <ProductGrid
        items={wheelSpacers ?? []}
        getKey={(wheelSpacer) => wheelSpacer.id}
        renderItem={(wheelSpacer) => (
          <WheelSpacerCard wheelSpacer={wheelSpacer} />
        )}
      />
    </ProductPageLayout>
  );
};
