import { baseApi } from '@/shared/api';
import type { Tire } from '@/entities/tire/model';

const BASE_URL = '/api/tires';

export const tireApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTires: builder.query<Tire[], void>({
      providesTags: ['Tires'],
      query: () => ({
        url: BASE_URL,
      }),
    }),
  }),
});

export const { useGetTiresQuery } = tireApi;
