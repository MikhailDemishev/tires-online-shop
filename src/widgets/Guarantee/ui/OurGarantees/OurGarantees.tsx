import { GuaranteeAccordion } from '@/widgets/Guarantee/ui/GuaranteeAccordion';
import s from './OurGarantees.module.scss';
import { Section } from '@/shared/ui/Section/Section';
export const OurGarantees = () => {
  return (
    <Section title="наши гарантии" className={s.ourGuarantees}>
      <GuaranteeAccordion />
    </Section>
  );
};
