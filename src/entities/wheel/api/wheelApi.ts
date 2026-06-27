import { baseApi } from '@/shared/api';
import type { Wheel } from '@/entities/wheel/model';

const BASE_URL = '/api/wheels';

export const wheelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheels: builder.query<Wheel[], void>({
      providesTags: ['Wheels'],
      query: () => ({
        url: BASE_URL,
      }),
    }),
  }),
});

export const { useGetWheelsQuery } = wheelApi;
