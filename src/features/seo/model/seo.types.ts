export type SeoType = {
  id: number;
  pageName: string;
  pageUrl: string;
  robots: string;
  title: {
    en: string;
    pl: string;
    ru: string;
  };
  description: {
    en: string;
    pl: string;
    ru: string;
  };
  keywords: {
    en: string;
    pl: string;
    ru: string;
  };
  h1: {
    en: string;
    pl: string;
    ru: string;
  };
};

export type ProductSeoType = 'tire' | 'wheel' | 'wheelSpacer';
