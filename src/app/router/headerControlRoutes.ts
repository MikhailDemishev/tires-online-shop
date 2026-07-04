import { Favorites } from '@/pages/Favorites';
import { ROUTES } from './paths';
import { Cart } from '@/pages/Cart';
import { CartIcon, HeartIcon, ProfileIcon } from '@/assets/icons';
import { Profile } from '@/pages/Profile';

export const headerControlRoutes = [
  {
    icon: HeartIcon,
    path: ROUTES.favorites,
    component: Favorites,
    protected: false,
  },
  {
    icon: CartIcon,
    path: ROUTES.cart,
    component: Cart,
    protected: false,
  },
  {
    icon: ProfileIcon,
    path: ROUTES.profile,
    component: Profile,
    protected: true,
  },
] as const;
