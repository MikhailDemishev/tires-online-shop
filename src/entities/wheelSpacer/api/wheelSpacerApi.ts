import { baseApi } from '@/shared/api';
import type {
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
  }),
});

export const { useGetWheelSpacersQuery } = wheelSpacerApi;
