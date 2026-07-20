import s from './FAQ.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { FAQ_ACCORDION_ITEMS } from './faqValues';
import { Section } from '@/shared/ui/Section/Section';

export const FAQ = () => {
  return (
    <Section className={s.homeFaq} title="часто задаваемые вопросы" hasWrapper>
      <Accordion
        className={s.faqAccordion}
        itemClassName={s.faqAccordionItem}
        triggerClassName={s.faqAccordionTrigger}
        contentClassName={s.faqAccordionContent}
        items={FAQ_ACCORDION_ITEMS}
      />
    </Section>
  );
};
