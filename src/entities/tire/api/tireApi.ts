import { baseApi } from '@/shared/api';
import type {
  TireDetails,
  TireFullResponse,
  TireParams,
} from '@/entities/tire/model';
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
    getTireById: builder.query<TireDetails, string | number>({
      query: (id) => `${BASE_URL}/${id}`,
      providesTags: (_, __, id) => [{ type: 'Tire', id }],
    }),
  }),
});

export const { useGetTiresQuery, useGetTireByIdQuery } = tireApi;
