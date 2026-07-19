import s from './GuaranteeAccordion.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { GUARANTEE_ACCORDION_ITEMS } from '@/widgets/Guarantee/config';

export const GuaranteeAccordion = () => {
  return (
    <Accordion
      className={s.guaranteeAccordion}
      itemClassName={s.guaranteeAccordionItem}
      triggerClassName={s.guaranteeAccordionTrigger}
      contentClassName={s.guaranteeAccordionContent}
      defaultValue="characteristics"
      items={GUARANTEE_ACCORDION_ITEMS.map(({ value, header, children }) => ({
        value,
        header: <p className={s.guaranteeAccordionTitle}> {header}</p>,
        children: <p className={s.guaranteeAccordionText}>{children}</p>,
      }))}
    />
  );
};

//  items={[
//   {
//     value: 'characteristics',
//     header: (
//       <div className={s.guaranteeAccordionHeader}>
//         <span className={s.guaranteeAccordionTitle}>Характеристики</span>
//         <Arrow className={s.guaranteeAccordionIcon} />
//       </div>
//     ),
//     children: (
//       <ul className={s.productAccordionChars}>
//         {characteristics.map(({ label, value }) => (
//           <li key={label} className={s.productAccordionChar}>
//             <p className={s.productAccordionCharLabel}>{label}</p>
//             <p className={s.productAccordionCharValue}>{value}</p>
//           </li>
//         ))}
//       </ul>
//     ),
//   },
//   {
//     value: 'description',
//     header: (
//       <div className={s.productAccordionHeader}>
//         <span className={s.productAccordionTitle}>Описание</span>
//         <Arrow className={s.productAccordionIcon} />
//       </div>
//     ),
//     children: (
//       <ul className={s.productAccordionChars}>
//         <li className={s.productAccordionChar}>
//           здесь будет описание. пока его нет на бэке
//         </li>
//         ,
//       </ul>
//     ),
//   },
// ]}
