import type { ProductCharacteristic } from '@/entities/product/model';
import s from './ProductAccordion.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { Arrow, Delivery, Guarantee, Manual } from '@/assets/icons';
import { Link } from 'react-router-dom';

const PRODUCT_INFO_LINKS = [
  {
    label: 'Доставка',
    icon: <Delivery />,
    to: '/delivery',
  },
  {
    label: 'Гарантия',
    icon: <Guarantee />,
    to: '/guarantee',
  },
  {
    label: 'Руководство по установке',
    icon: <Manual />,
    to: '/installation-guide',
  },
];

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
      items={[
        {
          value: 'manufacturer',
          header: (
            <div className={s.productAccordionHeader}>
              <span className={s.productAccordionTitle}>Описание</span>
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
              <span className={s.productAccordionTitle}>Характеристики</span>
              <Arrow className={s.productAccordionIcon} />
            </div>
          ),
          children: (
            <ul className={s.productAccordionChars}>
              {PRODUCT_INFO_LINKS.map(({ label, icon, to }) => (
                <li key={to} className={s.productAccordionChar}>
                  <Link to={to} className={s.productAccordionLink}>
                    <span className={s.productAccordionLinkIcon}>{icon}</span>
                    <span className={s.productAccordionLinkText}>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ),
        },
      ]}
    />
  );
};
