import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/app/store';
import { I18nProvider } from '@/shared/i18/context';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <I18nProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </I18nProvider>
    </Provider>
  );
};
