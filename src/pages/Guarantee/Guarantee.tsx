import { GuaranteeBanner } from '@/widgets/Guarantee/ui/GuaranteeBanner/';

import s from './Guarantee.module.scss';
import { ReturnProcessSection } from '@/widgets/Guarantee/ui/ReturnProcessSection/ReturnProcessSection';
import { OurGarantees } from '@/widgets/Guarantee/ui/OurGarantees';
import { GuaranteeBrands } from '@/widgets/Guarantee/ui/GuaranteeBrands';
export const Guarantee = () => {
  return (
    <section className={s.guarantee}>
      <GuaranteeBanner />
      <OurGarantees />
      <GuaranteeBrands />
      <ReturnProcessSection />
    </section>
  );
};
