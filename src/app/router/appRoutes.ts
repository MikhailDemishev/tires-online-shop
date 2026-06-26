import { catalogRoutes } from './catalogRoutes';
import { pageRoutes } from './pageRoutes';

export const appRoutes = [...pageRoutes, ...catalogRoutes] as const;
