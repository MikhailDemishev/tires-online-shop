import s from './TireServicePrice.module.scss';
import { Accordion } from '@/shared/ui/Accordion/Accordion';
import { CloseIcon } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';
import { TIRE_SERVICES } from '../../config';
import { Section } from '@/shared/ui/Section/Section';
import { ServicePriceContent } from './ServicePriceContent';

type ServicePriceProps = {
  activeItem: string;
  onActiveItemChange: (value: string) => void;
};
export const TireServicePrice = ({
  activeItem,
  onActiveItemChange,
}: ServicePriceProps) => {
  const { t } = useTranslation();
  const titleSection = t('pages.tireService.tireServiceServices.titlePrice');

  return (
    <Section title={titleSection} className={s.servicePrice}>
      <div className={s.servicePriceWrapper}>
        <Accordion
          className={s.servicePriceAccordion}
          itemClassName={s.servicePriceAccordionItem}
          triggerClassName={s.servicePriceAccordionTrigger}
          contentClassName={s.servicePriceAccordionContent}
          activeItem={activeItem}
          onActiveItemChange={onActiveItemChange}
          items={TIRE_SERVICES.map(({ value, title, price }) => ({
            value,
            header: (
              <div className={s.servicePriceAccordionHeader}>
                <span className={s.servicePriceAccordionTitle}>{t(title)}</span>
                <CloseIcon className={s.servicePriceAccordionIcon} />
              </div>
            ),
            children: <ServicePriceContent price={price} />,
          }))}
        />
      </div>
      <p className={s.servicePriceNote}>
        {t('pages.tireService.tireServiceServices.note')}{' '}
        <a href="tel:+381641234567" className={s.phoneLink}>
          +48 500 405 819
        </a>
      </p>
    </Section>
  );
};
