import { useGetTiresQuery } from '@/entities/tire/api';
import { TireCard } from '@/entities/tire/ui';

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
    <div>
      {data?.map((tire) => (
        <TireCard key={tire.id} tire={tire} />
      ))}
    </div>
  );
};
