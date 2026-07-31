import { Leaf, ShieldIcon, UserCheckIcon } from '@/assets/icons';

export const ourValues = [
  {
    title: 'Честность',
    description:
      'Мы всегда говорим правду о состоянии и характеристиках каждой шины',
    Icon: ShieldIcon,
    iconSize: { width: 40, height: 45 },
  },
  {
    title: 'Экспертность',
    description:
      'Мы глубоко знаем наш продукт и предлагаем оптимальные решения для внедорожников',
    Icon: UserCheckIcon,
    iconSize: { width: 45, height: 38 },
  },
  {
    title: 'Надёжность',
    description:
      'Мы поддерживаем концепцию разумного потребления, предлагая качественные восстановленные шины',
    Icon: Leaf,
    iconSize: { width: 35, height: 35 },
  },
] as const;
