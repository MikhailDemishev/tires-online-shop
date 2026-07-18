import { GuaranteeBanner } from '@/widgets/Guarantee/ui/GuaranteeBanner/';

import s from './Guarantee.module.scss';
import { ReturnProcessSection } from '@/widgets/Guarantee/ui/ReturnProcessSection/ReturnProcessSection';
export const Guarantee = () => {
  return (
    <section className={s.guarantee}>
      <GuaranteeBanner />
      <ReturnProcessSection />
    </section>
  );
};
