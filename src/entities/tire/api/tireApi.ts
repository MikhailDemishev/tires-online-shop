import { baseApi } from '@/shared/api';
import type { TireFullResponse, TireParams } from '@/entities/tire/model';
import { createPaginationParams } from '@/shared/lib/helpers';

const BASE_URL = '/api/tires';

export const tireApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTires: builder.query<TireFullResponse, TireParams>({
      providesTags: ['Tires'],
      query: (params) => ({
        url: BASE_URL,
        params: createPaginationParams(params),
      }),
    }),
  }),
});

export const { useGetTiresQuery } = tireApi;
