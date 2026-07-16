import { ROUTES } from '@/app/router';
import { useGetTireByIdQuery } from '@/entities/tire/api';
import { TireDetailsCard } from '@/entities/tire/ui/TireDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useParams } from 'react-router-dom';

export const TireDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useGetTireByIdQuery(id!);

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
        label: 'Шины 4x4',
        to: ROUTES.tires,
      }}
      productDetailsCard={<TireDetailsCard tire={data} />}
    />
  );
};
