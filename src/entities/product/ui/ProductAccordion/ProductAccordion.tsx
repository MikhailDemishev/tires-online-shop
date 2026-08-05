import type { ProductCharacteristic } from '@/entities/product/model';
import s from './ProductAccordion.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Arrow } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';

type ProductAccordionProps = {
  characteristics: ProductCharacteristic[];
  description: ProductCharacteristic[];
  className?: string;
};
export const ProductAccordion = ({
  characteristics,
  description,
}: ProductAccordionProps) => {
  const { t } = useTranslation();
  const PRODUCT_ACCORDION_ITEMS = [
    {
      value: 'characteristics',
      header: t('cards.productDetailCard.accordion.headers.header1'),
      children: characteristics ?? [],
    },

    {
      value: 'description',
      header: t('cards.productDetailCard.accordion.headers.header2'),
      children: description ?? [],
    },
  ];

  return (
    <Accordion
      className={s.productAccordion}
      itemClassName={s.productAccordionItem}
      triggerClassName={s.productAccordionTrigger}
      contentClassName={s.productAccordionContent}
      defaultValue="characteristics"
      items={PRODUCT_ACCORDION_ITEMS.map(({ value, header, children }) => ({
        value,
        header: (
          <div className={s.productAccordionHeader}>
            <span className={s.productAccordionTitle}>{header}</span>
            <Arrow className={s.productAccordionIcon} />
          </div>
        ),
        children: (
          <ul className={s.productAccordionChars}>
            {children.map(({ label, value }) => (
              <li key={`${label}-${value}`} className={s.productAccordionChar}>
                {label && (
                  <p className={s.productAccordionCharLabel}>{label}</p>
                )}
                <p className={s.productAccordionCharValue}>{value}</p>
              </li>
            ))}
          </ul>
        ),
      }))}
    />
  );
};
