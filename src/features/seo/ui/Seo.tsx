import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  index?: boolean;
};

export const Seo = ({
  title,
  description,
  keywords,
  canonical,
  index = true,
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={canonical} />

      <meta name="robots" content={`${index ? 'index' : 'noindex'}, follow`} />
    </Helmet>
  );
};
