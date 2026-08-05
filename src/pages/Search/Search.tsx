import s from './Search.module.scss';
import { useParams } from 'react-router';

import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { SearchCard } from '@/features/search/ui/SearchCard';
import { useGetSearchResultsQuery } from '@/features/search/api';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDebounce } from '@/shared/lib/hooks';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import type { SearchParams } from '@/features/search/model';
export const Search = () => {
  const { title = '' } = useParams();
  const debouncedTitle = useDebounce(title, 500);
  const params = usePaginationParams<SearchParams>();

  const { data, isLoading, isError } = useGetSearchResultsQuery(
    debouncedTitle
      ? {
          ...params,
          keyword: title,
        }
      : skipToken,
  );

  const foundProducts = data?.content;

  return (
    <ProductPageLayout
      title="Search Results"
      className={s.searchPage}
      totalPages={data?.totalPages ?? 1}
      currentPage={data?.pageNumber ?? 1}
      isError={isError}
      isLoading={isLoading}
    >
      {!title ? (
        <div>Введите запрос</div>
      ) : foundProducts?.length ? (
        <ProductGrid
          items={foundProducts}
          getKey={(foundProduct) => foundProduct.id}
          renderItem={(foundProduct) => (
            <SearchCard searchProduct={foundProduct} />
          )}
        />
      ) : (
        <div>Ничего не найдено</div>
      )}
    </ProductPageLayout>
  );
};
