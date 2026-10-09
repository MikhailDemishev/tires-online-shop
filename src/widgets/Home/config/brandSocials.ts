import { Instagram, Telegram } from '@/assets/icons';
import { INSTAGRAM_URL, TELEGRAM_URL } from '@/shared/config/siteConst';
import type { SocialItem } from '@/shared/ui/Socials';
export const brandSocials: SocialItem[] = [
  {
    Icon: Instagram,
    href: INSTAGRAM_URL,
    label: 'pages.home.brandIntro.socials.instagram',
  },
  {
    Icon: Telegram,
    href: TELEGRAM_URL,
    label: 'pages.home.brandIntro.socials.telegram',
  },
];
