import { ROUTES } from './paths';

export const footerRoutes = {
  information: [
    {
      label: 'О нас',
      path: ROUTES.aboutUs,
    },
    // {
    //   label: 'Контакты',
    //   path: ROUTES.contacts,
    // },

    {
      label: 'Отзывы',
      path: ROUTES.feedback,
    },
  ],

  support: [
    {
      label: 'Гарантия',
      path: ROUTES.guarantee,
    },
  ],
} as const;
