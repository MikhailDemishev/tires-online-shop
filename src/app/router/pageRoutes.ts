import { AboutUs } from '@/pages/AboutUs';
import { Contacts } from '@/pages/Contacts';
import { Delivery } from '@/pages/Delivery';
import { Feedback } from '@/pages/Feedback';
import { Guarantee } from '@/pages/Guarantee';
import { Home } from '@/pages/Home';
import { News } from '@/pages/News';

import { ROUTES } from './paths';

export const pageRoutes = [
  {
    label: 'Главная',
    path: ROUTES.home,
    component: Home,
  },
  {
    label: 'О нас',
    path: ROUTES.aboutUs,
    component: AboutUs,
  },
  {
    label: 'Контакты',
    path: ROUTES.contacts,
    component: Contacts,
  },
  {
    label: 'Гарантия',
    path: ROUTES.guarantee,
    component: Guarantee,
  },
  {
    label: 'Доставка',
    path: ROUTES.delivery,
    component: Delivery,
  },
  {
    label: 'Новости',
    path: ROUTES.news,
    component: News,
  },
  {
    label: 'Отзывы',
    path: ROUTES.feedback,
    component: Feedback,
  },
] as const;
