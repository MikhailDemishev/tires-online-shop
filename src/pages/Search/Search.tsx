import s from './Search.module.scss';
import { useParams } from 'react-router';

import { ProductPageLayout } from '@/layouts/ProductPageLayout';
import { ProductGrid } from '@/widgets/ProductGrid';
import { SearchCard } from '@/features/search/ui/SearchCard';
import { useGetSearchResultsQuery } from '@/features/search/api';
import { skipToken } from '@reduxjs/toolkit/query';
import { useDebounce, useTranslation } from '@/shared/lib/hooks';
import { usePaginationParams } from '@/features/pagination/model/usePaginationParams';
import type { SearchParams } from '@/features/search/model';
import { SEARCH_SORT_OPTIONS } from '@/features/sort/config';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';
export const Search = () => {
  const { title = '' } = useParams();
  const debouncedTitle = useDebounce(title, 300);
  const params = usePaginationParams<SearchParams>();
  const { t } = useTranslation();

  const {
    currentData: data,
    isLoading,
    isError,
  } = useGetSearchResultsQuery(
    debouncedTitle
      ? {
          ...params,
          keyword: debouncedTitle,
        }
      : skipToken,
  );

  const foundProducts = data?.content;
  const seo = useSeo(undefined, undefined, '/search');

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <ProductPageLayout
        title={t('pages.search.title')}
        sortOptions={SEARCH_SORT_OPTIONS}
        className={s.searchPage}
        totalPages={data?.totalPages ?? 1}
        currentPage={data?.pageNumber ?? 1}
        isError={isError}
        isLoading={isLoading}
        showSort={!!title && !!foundProducts?.length}
      >
        {!title ? (
          <div>{t('pages.search.enterQuery')}</div>
        ) : foundProducts?.length ? (
          <ProductGrid
            items={foundProducts}
            getKey={(foundProduct) => foundProduct.id}
            renderItem={(foundProduct) => (
              <SearchCard searchProduct={foundProduct} />
            )}
          />
        ) : (
          <div>{t('pages.search.noResults')}</div>
        )}
      </ProductPageLayout>
    </>
  );
};
