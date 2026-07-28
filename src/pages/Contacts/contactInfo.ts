import { Email, Phone } from '@/assets/icons';

export const contactsInfo = [
  {
    Icon: Phone,
    value: '+48 500 405 819',
    href: 'tel:+48500405819',
  },
  {
    Icon: Email,
    value: 'insaturbo4x4.help@gmail.com',
    href: 'mailto:insaturbo4x4.help@gmail.com',
  },
] as const;
