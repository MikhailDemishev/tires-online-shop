import { useGetTiresQuery } from '@/entities/tire/api';
import { TireCard } from '@/entities/tire/ui/TireCard';
import s from './Tires.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { useSearchParams } from 'react-router-dom';
import type { TireParams } from '@/entities/tire/model';
export const Tires = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams) as TireParams;
  const { data, isLoading, isError, error } = useGetTiresQuery(params);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }
  console.log(data);

  return (
    <ProductPageLayout
      title="Tires"
      filterType="tires"
      className={s.tiresPage}
      isEmpty={!data?.length}
    >
      <ProductGrid
        items={data ?? []}
        getKey={(tire) => tire.id}
        renderItem={(tire) => <TireCard tire={tire} />}
      />
    </ProductPageLayout>
  );
};
