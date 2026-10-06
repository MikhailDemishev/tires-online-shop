import { useTranslation } from '@/shared/lib/hooks';
import s from './GuaranteeAccordion.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { GUARANTEE_ACCORDION_ITEMS } from '@/widgets/Guarantee/config';
import { CloseIcon } from '@/assets/icons';

export const GuaranteeAccordion = () => {
  const { t } = useTranslation();
  return (
    <Accordion
      className={s.guaranteeAccordion}
      itemClassName={s.guaranteeAccordionItem}
      triggerClassName={s.guaranteeAccordionTrigger}
      contentClassName={s.guaranteeAccordionContent}
      defaultValue="characteristics"
      items={GUARANTEE_ACCORDION_ITEMS.map(
        ({ value, header, content, link }) => ({
          value,
          header: (
            <div className={s.guaranteeAccordionHeader}>
              <span className={s.guaranteeAccordionTitle}>{t(header)}</span>
              <CloseIcon className={s.guaranteeAccordionIcon} />
            </div>
          ),
          children: (
            <p className={s.guaranteeAccordionText}>
              {t(content)}
              {link && (
                <>
                  <a href={link.href} className={s.link}>
                    {t(link.text)}
                  </a>
                </>
              )}
            </p>
          ),
        }),
      )}
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
