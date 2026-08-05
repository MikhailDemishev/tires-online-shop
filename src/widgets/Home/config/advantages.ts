import { Navigation, Warning, CircularArrow, UserHelp } from '@/assets/icons';

export const ADVANTAGES = [
  {
    id: 1,
    Icon: Navigation,
    iconClassName: 'navigationIcon',
    title: 'pages.home.advantages.delivery.title',
    description: 'pages.home.advantages.delivery.description',
  },
  {
    id: 2,
    Icon: Warning,
    iconClassName: 'warningIcon',
    title: 'pages.home.advantages.originalProducts.title',
    description: 'pages.home.advantages.originalProducts.description',
  },
  {
    id: 3,
    Icon: CircularArrow,
    iconClassName: 'circularArrowIcon',
    title: 'pages.home.advantages.returns.title',
    description: 'pages.home.advantages.returns.description',
  },
  {
    id: 4,
    Icon: UserHelp,
    iconClassName: 'userHelpIcon',
    title: 'pages.home.advantages.assistance.title',
    description: 'pages.home.advantages.assistance.description',
  },
] as const;
