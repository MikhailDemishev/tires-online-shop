import { CartIcon, HeartIcon, ProfileIcon } from '@/assets/icons';

import { ROUTES } from './paths';

export const headerRoutes = {
  pages: [
    {
      labelKey: 'header.topMenu.aboutUs',
      path: ROUTES.aboutUs,
    },
    {
      labelKey: 'header.topMenu.contacts',
      path: ROUTES.contacts,
    },
    {
      labelKey: 'header.topMenu.guarantee',
      path: ROUTES.guarantee,
    },
    {
      labelKey: 'header.topMenu.news',
      path: ROUTES.news,
    },
    {
      labelKey: 'header.topMenu.feedback',
      path: ROUTES.feedback,
    },
  ],

  catalog: [
    {
      labelKey: 'header.catalog.tires',
      path: ROUTES.tires,
    },
    {
      labelKey: 'header.catalog.wheels',
      path: ROUTES.wheels,
    },
    {
      labelKey: 'header.catalog.wheelSpacers',
      path: ROUTES.wheelSpacers,
    },
  ],

  controls: [
    {
      icon: HeartIcon,
      path: ROUTES.favorites,
      protected: false,
    },
    {
      icon: CartIcon,
      path: ROUTES.cart,
      protected: false,
    },
    {
      icon: ProfileIcon,
      path: ROUTES.profile,
      protected: true,
    },
  ],
} as const;
