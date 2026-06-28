import s from './WheelSpacers.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useGetWheelSpacersQuery } from '@/entities/wheelSpacer/api';
import { WheelSpacerCard } from '@/entities/wheelSpacer/ui/WheelSpacerCard';
export const WheelSpacers = () => {
  const { data, isLoading, isError, error } = useGetWheelSpacersQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ProductPageLayout title="WheelSpacers" className={s.wheelSpacersPage}>
      <ProductGrid
        items={data ?? []}
        getKey={(wheelSpacer) => wheelSpacer.id}
        renderItem={(wheelSpacer) => (
          <WheelSpacerCard wheelSpacer={wheelSpacer} />
        )}
      />
    </ProductPageLayout>
  );
};
