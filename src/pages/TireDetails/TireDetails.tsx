import { ROUTES } from '@/app/router';
import { useGetTireByIdQuery } from '@/entities/tire/api';
import { TireDetailsCard } from '@/entities/tire/ui/TireDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useParams } from 'react-router-dom';

export const TireDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetTireByIdQuery(id!);

  console.log('tires', data);
  return (
    <ProductDetailsPageLayout
      title={data?.title ?? 'title'}
      category={{
        label: 'pages.tires.title',
        to: ROUTES.tires,
      }}
      productDetailsCard={data ? <TireDetailsCard tire={data} /> : null}
      isError={isError}
      isLoading={isLoading}
      isEmpty={!data}
    />
  );
};
