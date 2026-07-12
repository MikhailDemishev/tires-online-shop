import { ROUTES } from '@/app/router';
import { useGetWheelSpacerByIdQuery } from '@/entities/wheelSpacer/api';
import { WheelSpacersDetailsCard } from '@/entities/wheelSpacer/ui/WheelSpacerDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useParams } from 'react-router-dom';

export const WheelSpacerDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useGetWheelSpacerByIdQuery(id!);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }
  if (!data) {
    return null;
  }

  console.log('tires', data);
  return (
    <ProductDetailsPageLayout
      title={data?.title ?? 'title'}
      category={{
        label: 'Проставки',
        to: ROUTES.wheelSpacers,
      }}
    >
      <WheelSpacersDetailsCard spacer={data} />
    </ProductDetailsPageLayout>
  );
};
