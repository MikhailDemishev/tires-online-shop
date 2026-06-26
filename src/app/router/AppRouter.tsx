import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { appRoutes } from './appRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {appRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};
