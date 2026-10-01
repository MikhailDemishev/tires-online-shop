import { GuaranteeBanner } from '@/widgets/Guarantee/ui/GuaranteeBanner/';
import { SupportBanner } from '@/widgets/Guarantee/ui/SupportBanner';

import s from './Guarantee.module.scss';
// import { ReturnProcessSection } from '@/widgets/Guarantee/ui/ReturnProcessSection/ReturnProcessSection';
import { OurGarantees } from '@/widgets/Guarantee/ui/OurGarantees';
import { GuaranteeBrands } from '@/widgets/Guarantee/ui/GuaranteeBrands';
import { useSeo } from '@/features/seo/lib';
import { ROUTES } from '@/app/router';
import { Seo } from '@/features/seo/ui';
export const Guarantee = () => {
  const title = 'pages.guarantee.title';
  const seo = useSeo(undefined, undefined, ROUTES.guarantee);
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <section className={s.guarantee}>
        <h1 className="visuallyHidden">{title}</h1>
        <GuaranteeBanner pageTitle={title} />
        <OurGarantees />
        <GuaranteeBrands />
        {/* <ReturnProcessSection /> */}
        <SupportBanner />
      </section>
    </>
  );
};
