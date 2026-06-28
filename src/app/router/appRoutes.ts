import { catalogRoutes } from './catalogRoutes';
import { pageRoutes } from './pageRoutes';
import { serviceRoutes } from './serviceRoutes';

export const appRoutes = [
  ...pageRoutes,
  ...catalogRoutes,
  ...serviceRoutes,
] as const;
