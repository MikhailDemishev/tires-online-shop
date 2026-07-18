import type { ProductCharacteristic } from '@/entities/product/model';
import s from './ProductAccordion.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Arrow } from '@/assets/icons';

type ProductAccordionProps = {
  characteristics: ProductCharacteristic[];
  className?: string;
};
export const ProductAccordion = ({
  characteristics,
}: ProductAccordionProps) => {
  return (
    <Accordion
      className={s.productAccordion}
      itemClassName={s.productAccordionItem}
      triggerClassName={s.productAccordionTrigger}
      contentClassName={s.productAccordionContent}
      defaultValue="characteristics"
      items={[
        {
          value: 'characteristics',
          header: (
            <div className={s.productAccordionHeader}>
              <span className={s.productAccordionTitle}>Характеристики</span>
              <Arrow className={s.productAccordionIcon} />
            </div>
          ),
          children: (
            <ul className={s.productAccordionChars}>
              {characteristics.map(({ label, value }) => (
                <li key={label} className={s.productAccordionChar}>
                  <p className={s.productAccordionCharLabel}>{label}</p>
                  <p className={s.productAccordionCharValue}>{value}</p>
                </li>
              ))}
            </ul>
          ),
        },
        {
          value: 'description',
          header: (
            <div className={s.productAccordionHeader}>
              <span className={s.productAccordionTitle}>Описание</span>
              <Arrow className={s.productAccordionIcon} />
            </div>
          ),
          children: (
            <ul className={s.productAccordionChars}>
              <li className={s.productAccordionChar}>
                здесь будет описание. пока его нет на бэке
              </li>
              ,
            </ul>
          ),
        },
      ]}
    />
  );
};
