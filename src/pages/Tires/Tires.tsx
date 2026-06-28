import { useGetTiresQuery } from '@/entities/tire/api';
import { TireCard } from '@/entities/tire/ui/TireCard';
import s from './Tires.module.scss';
import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
export const Tires = () => {
  const { data, isLoading, isError, error } = useGetTiresQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ProductPageLayout title="Tires" className={s.tiresPage}>
      <ProductGrid
        items={data ?? []}
        getKey={(tire) => tire.id}
        renderItem={(tire) => <TireCard tire={tire} />}
      />
    </ProductPageLayout>
  );
};
