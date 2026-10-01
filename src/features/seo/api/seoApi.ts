import { baseApi } from '@/shared/api';
import type { SeoType } from '../model';

const BASE_URL = '/api/tires/seo/pages';
export const seoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeo: builder.query<SeoType[], void>({
      query: () => ({
        url: BASE_URL,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSeoQuery } = seoApi;
