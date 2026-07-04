import { baseApi } from '@/shared/api';
import type { WheelFullResponse, WheelParams } from '@/entities/wheel/model';
import { createPaginationParams } from '@/shared/lib/helpers';

const BASE_URL = '/api/wheels';

export const wheelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheels: builder.query<WheelFullResponse, WheelParams>({
      providesTags: ['Wheels'],
      query: (params) => ({
        url: BASE_URL,
        params: createPaginationParams(params),
      }),
    }),
  }),
});

export const { useGetWheelsQuery } = wheelApi;
