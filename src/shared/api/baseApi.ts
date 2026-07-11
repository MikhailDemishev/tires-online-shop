import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  // Теги для кеширования данных в RTK Query
  tagTypes: [
    'Auth',
    'Profile',
    'Tires',
    'Tire',
    'Wheels',
    'Wheel',
    'WheelSpacers',
    'WheelSpacer',
    'Brands',
    'Manufacturers',
    'Categories',
    'Cart',
    'Favorites',
    'Orders',

    'News',
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: () => ({}),
});
