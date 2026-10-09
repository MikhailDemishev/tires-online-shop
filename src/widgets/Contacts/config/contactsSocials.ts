import { Facebook, Instagram, Telegram, Youtube } from '@/assets/icons';
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  YOUTUBE_URL,
} from '@/shared/config/siteConst';
import type { SocialItem } from '@/shared/ui/Socials';

export const socials: SocialItem[] = [
  {
    Icon: Instagram,
    href: INSTAGRAM_URL,
    label: 'Instagram',
  },
  {
    Icon: Telegram,
    href: TELEGRAM_URL,
    label: 'Telegram',
  },
  {
    Icon: Youtube,
    href: YOUTUBE_URL,
    label: 'YouTube',
  },
  {
    Icon: Facebook,
    href: FACEBOOK_URL,
    label: 'Facebook',
  },
];
