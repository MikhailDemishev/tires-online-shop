import { baseApi } from '@/shared/api';
import type {
  WheelSpacerDetails,
  WheelSpacerFullResponse,
  WheelSpacerParams,
} from '@/entities/wheelSpacer/model';
import { createPaginationParams } from '@/shared/lib/helpers';

const BASE_URL = '/api/spacers';

export const wheelSpacerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheelSpacers: builder.query<WheelSpacerFullResponse, WheelSpacerParams>({
      providesTags: ['WheelSpacers'],
      query: (params) => ({
        url: BASE_URL,
        params: createPaginationParams(params),
      }),
    }),
    getWheelSpacerById: builder.query<WheelSpacerDetails, string | number>({
      query: (id) => `${BASE_URL}/${id}`,
      providesTags: (_, __, id) => [{ type: 'Wheel', id }],
    }),
  }),
});

export const { useGetWheelSpacersQuery, useGetWheelSpacerByIdQuery } =
  wheelSpacerApi;
