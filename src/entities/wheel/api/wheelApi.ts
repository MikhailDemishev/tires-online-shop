import { baseApi } from '@/shared/api';
import type { Wheel, WheelParams } from '@/entities/wheel/model';

const BASE_URL = '/api/wheels';

export const wheelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheels: builder.query<Wheel[], WheelParams>({
      providesTags: ['Wheels'],
      query: (params) => ({
        url: BASE_URL,
        params,
      }),
    }),
  }),
});

export const { useGetWheelsQuery } = wheelApi;
