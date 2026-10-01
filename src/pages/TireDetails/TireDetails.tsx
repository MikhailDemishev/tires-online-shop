import { ROUTES } from '@/app/router';
import { getProductTitle } from '@/entities/product/lib/helpers';
import { useGetTireByIdQuery } from '@/entities/tire/api';
import { TireDetailsCard } from '@/entities/tire/ui/TireDetailsCard';
import { useSeo } from '@/features/seo/lib/hooks/useSeo';
import { Seo } from '@/features/seo/ui';
import { ProductDetailsPageLayout } from '@/layouts/ProductDetailsPageLayout';
import { useTranslation } from '@/shared/lib/hooks';
import { useParams } from 'react-router-dom';

export const TireDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetTireByIdQuery(id!);

  //для продуктовой страницы title совпадает с h1 продукта, description выводится на фронте
  const title = data ? getProductTitle(data, t) : 'title';

  const seo = useSeo(data, 'tire', ROUTES.tires, 'product');

  return (
    <>
      <Seo
        title={title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <ProductDetailsPageLayout
        title={title}
        category={{
          label: 'pages.tires.title',
          to: ROUTES.tires,
        }}
        productDetailsCard={
          data ? <TireDetailsCard t={t} title={title} tire={data} /> : null
        }
        isError={isError}
        isLoading={isLoading}
        isEmpty={!data}
      />
    </>
  );
};
