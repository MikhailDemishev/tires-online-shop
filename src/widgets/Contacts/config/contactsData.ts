import { Email, Phone } from '@/assets/icons';
import {
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  SUPPORT_PHONE_LINK,
} from '@/shared/config/siteConst';

export const contactsData = [
  {
    Icon: Phone,
    value: SUPPORT_PHONE,
    href: `tel:${SUPPORT_PHONE_LINK}`,
  },
  {
    Icon: Email,
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
] as const;
