import { baseApi } from '@/shared/api';
import type { SearchProduct } from '@/features/search/model';

const BASE_URL = '/api/products/title';

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query<SearchProduct[], { keyword: string }>({
      query: ({ keyword }) => ({
        url: `${BASE_URL}/${keyword}`,
      }),
    }),
  }),
});

export const { useGetSearchResultsQuery } = searchApi;
