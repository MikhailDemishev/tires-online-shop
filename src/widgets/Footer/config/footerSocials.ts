import { Facebook, Instagram, Telegram, Youtube } from '@/assets/icons';
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  YOUTUBE_URL,
} from '@/shared/config/siteConst';
import type { SocialItem } from '@/shared/ui/Socials';

export const footerSocials: SocialItem[] = [
  {
    Icon: Facebook,
    href: FACEBOOK_URL,
    label: 'Facebook',
  },
  {
    Icon: Instagram,
    href: INSTAGRAM_URL,
    label: 'Instagram',
  },
  {
    Icon: Youtube,
    href: YOUTUBE_URL,
    label: 'YouTube',
  },
  {
    Icon: Telegram,
    href: TELEGRAM_URL,
    label: 'Telegram',
  },
];
