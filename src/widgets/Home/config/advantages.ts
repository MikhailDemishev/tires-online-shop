import { Navigation, Warning, CircularArrow, UserHelp } from '@/assets/icons';

export const ADVANTAGES = [
  {
    id: 1,
    Icon: Navigation,
    iconClassName: 'navigationIcon',
    title: 'Доставка по ЕС',
    description: 'Быстрая доставка по всей ЕС',
  },
  {
    id: 2,
    Icon: Warning,
    iconClassName: 'warningIcon',
    title: 'Оригинальная продукция',
    description: 'Только официальные поставки',
  },
  {
    id: 3,
    Icon: CircularArrow,
    iconClassName: 'circularArrowIcon',
    title: '30 дней на возврат',
    description: 'Возврат без вопросов в течение 30 дней',
  },
  {
    id: 4,
    Icon: UserHelp,
    iconClassName: 'userHelpIcon',
    title: 'Помощь в подборе',
    description: 'Наши специалисты помогут в выборе',
  },
] as const;
