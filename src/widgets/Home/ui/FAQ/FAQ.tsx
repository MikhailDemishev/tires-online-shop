import s from './FAQ.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { FAQ_ACCORDION_ITEMS } from './faqValues';

export const FAQ = () => {
  return (
    <section className={s.homeFaq}>
      <div className={'container'}>
        <div className={s.homeFaqWrapper}>
          <h2 className={s.title}>часто задаваемые вопросы</h2>
          <Accordion
            className={s.faqAccordion}
            itemClassName={s.faqAccordionItem}
            triggerClassName={s.faqAccordionTrigger}
            contentClassName={s.faqAccordionContent}
            items={FAQ_ACCORDION_ITEMS}
          />
        </div>
      </div>
    </section>
  );
};
