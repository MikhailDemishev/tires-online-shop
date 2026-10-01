import type { Tire } from '@/entities/tire/model';
import type { Wheel } from '@/entities/wheel/model';
import type { WheelSpacer } from '@/entities/wheelSpacer/model';
import type { ProductSeoType } from '../../model';
import { getProductSeoKeywords } from '../helpers/getProductSeoKeywords';
import { SITE_URL } from '@/shared/config/siteUrl';
import { useTranslation } from '@/shared/lib/hooks';
import { useLocation } from 'react-router-dom';
import { useGetSeoQuery } from '../../api';
import { getProductSeoDescription } from '../helpers/getProductSeoDescriptions';

type DescriptionSource = 'api' | 'product';

export const useSeo = (
  product: Tire | Wheel | WheelSpacer | undefined,
  type: ProductSeoType | undefined,
  pageUrl: string,
  descriptionSource: DescriptionSource = 'api',
) => {
  const { t, language } = useTranslation();
  const { pathname } = useLocation();
  const { data: seoData } = useGetSeoQuery();

  console.log(seoData, 'ffsgweegfwef');

  const seo = seoData?.find((item) => item.pageUrl === pageUrl);

  const description =
    descriptionSource === 'product' && type
      ? getProductSeoDescription(product, type, t)
      : seo?.description[language];

  const keywords =
    descriptionSource === 'product' && type
      ? getProductSeoKeywords(product, type, t)
      : seo?.keywords[language];

  return {
    title: seo?.title[language] ?? '',
    description: description ?? '',
    keywords: keywords ?? '',
    canonical: `${SITE_URL}${pathname}`,
  };
};
