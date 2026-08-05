import { GuaranteeBanner } from '@/widgets/Guarantee/ui/GuaranteeBanner/';
import { SupportBanner } from '@/widgets/Guarantee/ui/SupportBanner';

import s from './Guarantee.module.scss';
import { ReturnProcessSection } from '@/widgets/Guarantee/ui/ReturnProcessSection/ReturnProcessSection';
import { OurGarantees } from '@/widgets/Guarantee/ui/OurGarantees';
import { GuaranteeBrands } from '@/widgets/Guarantee/ui/GuaranteeBrands';
export const Guarantee = () => {
  const title = 'pages.guarantee.title';
  return (
    <section className={s.guarantee}>
      <h1 className="visuallyHidden">{title}</h1>
      <GuaranteeBanner pageTitle={title} />
      <OurGarantees />
      <GuaranteeBrands />
      <ReturnProcessSection />
      <SupportBanner />
    </section>
  );
};
