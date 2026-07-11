import { baseApi } from '@/shared/api';
import type {
  WheelDetails,
  WheelFullResponse,
  WheelParams,
} from '@/entities/wheel/model';
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
    getWheelById: builder.query<WheelDetails, string | number>({
      query: (id) => `${BASE_URL}/${id}`,
      providesTags: (_, __, id) => [{ type: 'Wheel', id }],
    }),
  }),
});

export const { useGetWheelsQuery, useGetWheelByIdQuery } = wheelApi;
