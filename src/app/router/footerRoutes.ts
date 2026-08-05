import { ROUTES } from './paths';

export const footerRoutes = {
  information: [
    {
      labelKey: 'footer.routes.aboutUs',
      path: ROUTES.aboutUs,
    },
    // {
    //   labelKey: 'footer.routes.contacts',
    //   path: ROUTES.contacts,
    // },

    {
      labelKey: 'footer.routes.feedback',
      path: ROUTES.feedback,
    },
  ],

  support: [
    {
      labelKey: 'footer.routes.guarantee',
      path: ROUTES.guarantee,
    },
  ],
} as const;
