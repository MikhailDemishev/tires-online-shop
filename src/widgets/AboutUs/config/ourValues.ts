import { Leaf, ShieldIcon, UserCheckIcon } from '@/assets/icons';

export const ourValues = [
  {
    title: 'pages.aboutUs.ourValues.items.honesty.title',
    description: 'pages.aboutUs.ourValues.items.honesty.description',
    Icon: ShieldIcon,
    iconSize: { width: 40, height: 45 },
  },
  {
    title: 'pages.aboutUs.ourValues.items.expertise.title',
    description: 'pages.aboutUs.ourValues.items.expertise.description',
    Icon: UserCheckIcon,
    iconSize: { width: 45, height: 38 },
  },
  {
    title: 'pages.aboutUs.ourValues.items.reliability.title',
    description: 'pages.aboutUs.ourValues.items.reliability.description',
    Icon: Leaf,
    iconSize: { width: 35, height: 35 },
  },
] as const;
