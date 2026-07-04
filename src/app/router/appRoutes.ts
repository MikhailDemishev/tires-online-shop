import { catalogRoutes } from './catalogRoutes';
import { headerControlRoutes } from './headerControlRoutes';
import { pageRoutes } from './pageRoutes';
import { serviceRoutes } from './serviceRoutes';

export const appRoutes = [
  ...pageRoutes,
  ...catalogRoutes,
  ...serviceRoutes,
  ...headerControlRoutes,
] as const;
