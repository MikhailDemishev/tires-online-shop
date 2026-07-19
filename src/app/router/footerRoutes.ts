import { ROUTES } from './paths';

export const footerRoutes = {
  information: [
    {
      label: 'О нас',
      path: ROUTES.aboutUs,
    },
    {
      label: 'Контакты',
      path: ROUTES.contacts,
    },
    {
      label: 'Оплата',
      path: ROUTES.payment,
    },
    {
      label: 'Доставка',
      path: ROUTES.delivery,
    },
    {
      label: 'Отзывы',
      path: ROUTES.feedback,
    },
  ],

  support: [
    {
      label: 'Возврат и обмен',
      path: ROUTES.returnExchange,
    },
    {
      label: 'Гарантия',
      path: ROUTES.guarantee,
    },
  ],
} as const;
