import { baseApi } from '@/shared/api';
import type { Tire, TireParams } from '@/entities/tire/model';

const BASE_URL = '/api/tires';

export const tireApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTires: builder.query<Tire[], TireParams>({
      providesTags: ['Tires'],
      query: (params) => ({
        url: BASE_URL,
        params,
      }),
    }),
  }),
});

export const { useGetTiresQuery } = tireApi;
