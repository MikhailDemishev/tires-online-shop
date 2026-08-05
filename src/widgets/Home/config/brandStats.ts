import { Calendar, Coins, WareHouse, Leaf } from '@/assets/icons';

export const BRAND_STATS = [
  {
    id: 1,
    Icon: Calendar,
    iconClassName: 'calendarIcon',
    value: '1988',
    description: 'pages.home.brandIntro.stats.foundation',
  },
  {
    id: 2,
    Icon: Coins,
    iconClassName: 'coinsIcon',
    value: '3000',
    description: 'pages.home.brandIntro.stats.dailyProduction',
  },
  {
    id: 3,
    Icon: WareHouse,
    iconClassName: 'wareHouseIcon',
    value: '200K M²',
    description: 'pages.home.brandIntro.stats.warehouseArea',
  },
  {
    id: 4,
    Icon: Leaf,
    iconClassName: 'leafIcon',
    value: '100%',
    description: 'pages.home.brandIntro.stats.recycling',
  },
] as const;
