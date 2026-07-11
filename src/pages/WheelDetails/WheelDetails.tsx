import { useGetWheelByIdQuery } from '@/entities/wheel/api';
import { WheelDetailsCard } from '@/entities/wheel/ui/WheelDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useParams } from 'react-router-dom';

export const WheelDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useGetWheelByIdQuery(id!);

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
    <ProductDetailsPageLayout title={data?.title ?? 'title'}>
      <WheelDetailsCard wheel={data} />
    </ProductDetailsPageLayout>
  );
};
