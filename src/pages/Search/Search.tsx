import s from './Search.module.scss';
import { useParams } from 'react-router';

import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { SearchCard } from '@/features/search/ui/SearchCard';
import { useGetSearchResultsQuery } from '@/features/search/api';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDebounce } from '@/shared/hooks';
export const Search = () => {
  const { title = '' } = useParams();
  const debouncedTitle = useDebounce(title, 500);

  const { data, isLoading, isError, error } = useGetSearchResultsQuery(
    debouncedTitle ? { keyword: title } : skipToken,
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    console.error(error);
    return <h1>Error</h1>;
  }

  return (
    <ProductPageLayout title="Search Results" className={s.searchPage}>
      {!title ? (
        <div>Введите запрос</div>
      ) : data?.length ? (
        <ProductGrid
          items={data}
          getKey={(searchProduct) => searchProduct.id}
          renderItem={(searchProduct) => (
            <SearchCard searchProduct={searchProduct} />
          )}
        />
      ) : (
        <div>Ничего не найдено</div>
      )}
    </ProductPageLayout>
  );
};
