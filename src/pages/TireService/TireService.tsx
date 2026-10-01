import { TireServiceBanner } from '@/widgets/TireService/ui/TireServiceBanner';
import s from './TireService.module.scss';
import { TireServices } from '@/widgets/TireService/ui/TireServiceServices';
import { TireServicePrice } from '@/widgets/TireService/ui/TireServicePrice';
import { useState } from 'react';
import { TireServiceAdvantages } from '@/widgets/TireService/ui/TireServiceAdvantages/TireServiceAdvantages';
import { ContactsBlock } from '@/widgets/Contacts';
import { useSeo } from '@/features/seo/lib';
import { ROUTES } from '@/app/router';
import { Seo } from '@/features/seo/ui';

export const TireService = () => {
  const title = 'pages.tireService.title';
  const [activeService, setActiveService] = useState('');
  const seo = useSeo(undefined, undefined, ROUTES.tireService);

  const handleServiceClick = (value: string) => {
    setActiveService(value);

    requestAnimationFrame(() => {
      document.getElementById(value)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <>
      <Seo
        title={title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <section className={s.tireService}>
        <h1 className="visuallyHidden">{title}</h1>
        <TireServiceBanner pageTitle={title} />
        <TireServices onServiceClick={handleServiceClick} />
        <TireServicePrice
          onActiveItemChange={setActiveService}
          activeItem={activeService}
        />
        <TireServiceAdvantages />
        <ContactsBlock notPage />
      </section>
    </>
  );
};
