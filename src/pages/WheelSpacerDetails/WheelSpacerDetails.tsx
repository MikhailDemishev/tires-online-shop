import { ROUTES } from '@/app/router';
import { useGetWheelSpacerByIdQuery } from '@/entities/wheelSpacer/api';
import { WheelSpacersDetailsCard } from '@/entities/wheelSpacer/ui/WheelSpacerDetailsCard';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useParams } from 'react-router-dom';

export const WheelSpacerDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetWheelSpacerByIdQuery(id!);

  console.log('tires', data);
  return (
    <ProductDetailsPageLayout
      title={data?.title ?? 'title'}
      category={{
        label: 'pages.wheelSpacers.title',
        to: ROUTES.wheelSpacers,
      }}
      productDetailsCard={
        data ? <WheelSpacersDetailsCard spacer={data} /> : null
      }
      isError={isError}
      isLoading={isLoading}
      isEmpty={!data}
    />
  );
};
