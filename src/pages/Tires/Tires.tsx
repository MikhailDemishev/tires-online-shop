import { useGetTiresQuery } from '@/entities/tire/api';
import { TireCard } from '@/entities/tire/ui/TireCard';
import s from './Tires.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import type { TireParams } from '@/entities/tire/model';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
export const Tires = () => {
  const params = usePaginationParams<TireParams>();
  const { data, isLoading, isError, error } = useGetTiresQuery(params);
  const tires = data?.content;

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
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      className={s.tiresPage}
      isEmpty={!tires?.length}
    >
      <ProductGrid
        items={tires ?? []}
        getKey={(tire) => tire.id}
        renderItem={(tire) => <TireCard tire={tire} />}
      />
    </ProductPageLayout>
  );
};
