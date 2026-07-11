import { Home } from '@/pages/Home';
import { ROUTES } from './paths';
import { AboutUs } from '@/pages/AboutUs';
import { Contacts } from '@/pages/Contacts';
import { Guarantee } from '@/pages/Guarantee';
import { Delivery } from '@/pages/Delivery';
import { News } from '@/pages/News';
import { Feedback } from '@/pages/Feedback';
import { Tires } from '@/pages/Tires';
import { Wheels } from '@/pages/Wheels';
import { WheelSpacers } from '@/pages/WheelSpacers';
import { Search } from '@/pages/Search';
import { Favorites } from '@/pages/Favorites';
import { Cart } from '@/pages/Cart';
import { Profile } from '@/pages/Profile';
import { ReturnExchange } from '@/pages/ReturnExchange';
import { Promotions } from '@/pages/Promotions';
import { Payment } from '@/pages/Payment';
import { WheelSpacerDetails } from '@/pages/WheelSpacerDetails';
import { TireDetails } from '@/pages/TireDetails';
import { WheelDetails } from '@/pages/WheelDetails';

export const appRoutes = [
  {
    path: ROUTES.home,
    component: Home,
  },
  {
    path: ROUTES.aboutUs,
    component: AboutUs,
  },
  {
    path: ROUTES.contacts,
    component: Contacts,
  },
  {
    path: ROUTES.guarantee,
    component: Guarantee,
  },
  {
    path: ROUTES.delivery,
    component: Delivery,
  },
  {
    path: ROUTES.news,
    component: News,
  },
  {
    path: ROUTES.feedback,
    component: Feedback,
  },
  {
    path: ROUTES.tires,
    component: Tires,
  },
  {
    path: ROUTES.tire,
    component: TireDetails,
  },
  {
    path: ROUTES.wheels,
    component: Wheels,
  },
  {
    path: ROUTES.wheel,
    component: WheelDetails,
  },
  {
    path: ROUTES.wheelSpacers,
    component: WheelSpacers,
  },
  {
    path: ROUTES.wheelSpacer,
    component: WheelSpacerDetails,
  },
  {
    path: ROUTES.search,
    component: Search,
  },
  {
    path: ROUTES.searchEmpty,
    component: Search,
  },
  {
    path: ROUTES.favorites,
    component: Favorites,
  },
  {
    path: ROUTES.cart,
    component: Cart,
  },
  {
    path: ROUTES.profile,
    component: Profile,
  },
  {
    path: ROUTES.returnExchange,
    component: ReturnExchange,
  },
  {
    path: ROUTES.promotions,
    component: Promotions,
  },
  {
    path: ROUTES.payment,
    component: Payment,
  },
] as const;
