import { ROUTES } from './paths';
import { Search } from '@/pages/Search';

export const serviceRoutes = [
  {
    label: 'Поиск',
    path: ROUTES.search,
    component: Search,
  },
  {
    label: 'Поиск',
    path: ROUTES.searchEmpty,
    component: Search,
  },
] as const;
