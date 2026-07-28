import { baseApi } from '@/shared/api';
import type {
  FeedbackFullResponse,
  FeedbackParams,
} from '@/entities/feedback/model';
import { createPaginationParams } from '@/shared/lib/helpers';

const BASE_URL = '/api/admin/feedback';

export const feedBackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeedback: builder.query<FeedbackFullResponse, FeedbackParams>({
      providesTags: ['Feedback'],
      query: (params) => ({
        url: BASE_URL,
        params: createPaginationParams(params),
      }),
    }),
    // getWheelById: builder.query<WheelDetails, string | number>({
    //   query: (id) => `${BASE_URL}/${id}`,
    //   providesTags: (_, __, id) => [{ type: 'Wheel', id }],
    // }),
  }),
});

export const { useGetFeedbackQuery } = feedBackApi;
