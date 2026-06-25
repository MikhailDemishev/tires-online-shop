import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';
import { MainLayout } from '@/layouts/MainLayout';

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
