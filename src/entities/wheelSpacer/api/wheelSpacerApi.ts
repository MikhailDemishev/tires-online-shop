import { baseApi } from '@/shared/api';
import type { WheelSpacer } from '@/entities/wheelSpacer/model';

const BASE_URL = '/api/spacers';

export const wheelSpacerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWheelSpacers: builder.query<WheelSpacer[], void>({
      providesTags: ['WheelSpacers'],
      query: () => ({
        url: BASE_URL,
      }),
    }),
  }),
});

export const { useGetWheelSpacersQuery } = wheelSpacerApi;
