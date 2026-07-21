import { CartIcon, HeartIcon, ProfileIcon } from '@/assets/icons';

import { ROUTES } from './paths';

export const headerRoutes = {
  pages: [
    {
      label: 'О нас',
      path: ROUTES.aboutUs,
    },
    {
      label: 'Контакты',
      path: ROUTES.contacts,
    },
    {
      label: 'Гарантия',
      path: ROUTES.guarantee,
    },
    {
      label: 'Новости',
      path: ROUTES.news,
    },
    {
      label: 'Отзывы',
      path: ROUTES.feedback,
    },
  ],

  catalog: [
    {
      label: 'Шины 4x4',
      path: ROUTES.tires,
    },
    {
      label: 'Диски',
      path: ROUTES.wheels,
    },
    {
      label: 'Дисковые проставки',
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
