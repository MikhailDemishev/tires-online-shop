import s from './FAQ.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { useFaqAccordionItems } from './faqValues';
import { Section } from '@/shared/ui/Section/Section';
import { useTranslation } from '@/shared/lib/hooks';

export const FAQ = () => {
  const items = useFaqAccordionItems();
  const { t } = useTranslation();
  return (
    <Section className={s.homeFaq} title={t('home.faq.title')} hasWrapper>
      <Accordion
        className={s.faqAccordion}
        itemClassName={s.faqAccordionItem}
        triggerClassName={s.faqAccordionTrigger}
        contentClassName={s.faqAccordionContent}
        items={items}
      />
    </Section>
  );
};
