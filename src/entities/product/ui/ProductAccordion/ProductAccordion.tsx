import type {
  ProductCharacteristic,
  ProductDescription,
} from '@/entities/product/model';
import s from './ProductAccordion.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Arrow } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';
import clsx from 'clsx';
import { renderDescription } from '../../lib/helpers';

type ProductAccordionProps = {
  characteristics: ProductCharacteristic[];
  description: ProductDescription[];
  className?: string;
};
export const ProductAccordion = ({
  characteristics,
  description,
}: ProductAccordionProps) => {
  const { t, language } = useTranslation();
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
            {children.map(({ label, value, className }) => (
              <li key={`${label}-${value}`} className={s.productAccordionChar}>
                {label && (
                  <p className={s.productAccordionCharLabel}>{label}</p>
                )}
                <div
                  className={clsx(
                    s.productAccordionCharValue,
                    className && s[className],
                  )}
                >
                  {typeof value === 'object'
                    ? renderDescription(value[language])
                    : value}
                </div>
              </li>
            ))}
          </ul>
        ),
      }))}
    />
  );
};
