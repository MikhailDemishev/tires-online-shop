import { baseApi } from '@/shared/api';
import type { SearchFullResponse, SearchParams } from '@/features/search/model';
import { createPaginationParams } from '@/shared/lib/helpers';

const BASE_URL = '/api/products/title';

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query<SearchFullResponse, SearchParams>({
      query: ({ keyword, ...params }) => ({
        url: `${BASE_URL}/${keyword}`,
        params: createPaginationParams(params),
      }),
    }),
  }),
});
export const { useGetSearchResultsQuery } = searchApi;
