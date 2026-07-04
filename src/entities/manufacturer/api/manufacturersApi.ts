import { baseApi } from '@/shared/api';
import type { Manufacturer } from '@/entities/manufacturer/model';

const BASE_URL = '/api/tires/producer';

export const manufacturersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getManufacturers: builder.query<Manufacturer[], void>({
      query: () => BASE_URL,
    }),

    getManufacturerById: builder.query<Manufacturer, number>({
      query: (id) => `${BASE_URL}/${id}`,
    }),
  }),
});

export const { useGetManufacturersQuery, useGetManufacturerByIdQuery } =
  manufacturersApi;
