import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/api';
import { modalOpenCloseReducer } from '@/app/store/slices';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modal: modalOpenCloseReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
