import { SUPPORT_PHONE_LINK } from '@/shared/config/siteConst';

type GuaranteeAccordionItem = {
  value: string;
  header: string;
  content: string;
  link?: {
    text: string;
    href: string;
  };
};
export const GUARANTEE_ACCORDION_ITEMS: readonly GuaranteeAccordionItem[] = [
  {
    value: 'original-products',
    header: 'pages.guarantee.guaranteeAccordion.originalProducts.header',
    content: 'pages.guarantee.guaranteeAccordion.originalProducts.content',
  },
  {
    value: 'manufacturer-warranty',
    header: 'pages.guarantee.guaranteeAccordion.manufacturerWarranty.header',
    content: 'pages.guarantee.guaranteeAccordion.manufacturerWarranty.content',
    link: {
      text: 'pages.guarantee.guaranteeAccordion.manufacturerWarranty.link.text',
      href: `tel:${SUPPORT_PHONE_LINK}`,
    },
  },
  {
    value: 'quality-control',
    header: 'pages.guarantee.guaranteeAccordion.qualityControl.header',
    content: 'pages.guarantee.guaranteeAccordion.qualityControl.content',
  },
  {
    value: 'installation-warranty',
    header: 'pages.guarantee.guaranteeAccordion.installationWarranty.header',
    content: 'pages.guarantee.guaranteeAccordion.installationWarranty.content',
  },
  {
    value: 'support',
    header: 'pages.guarantee.guaranteeAccordion.support.header',
    content: 'pages.guarantee.guaranteeAccordion.support.content',
  },
] as const;
