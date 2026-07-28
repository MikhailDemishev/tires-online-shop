import { InfoPageLayout } from '@/layouts/InfoPageLayout';
import s from './Contacts.module.scss';
import { LocationIcon, LongArrow } from '@/assets/icons';
import { Socials } from '@/shared/ui/Socials';
import { socials } from './contactsSocials';
import { contactsInfo } from './contactInfo';

export const Contacts = () => {
  return (
    <InfoPageLayout title="Наши контакты" className={s.contacts}>
      <div className={s.contactsWrapper}>
        <div className={s.contactsContent}>
          <div className={s.contactsTop}>
            <p className={s.contactsDescription}>
              Мы всегда на связи и готовы помочь с подбором шин и аксессуаров
              для вашего 4x4
            </p>
            <div className={s.contactsInfo}>
              {contactsInfo.map(({ Icon, value, href }) => (
                <a key={href} href={href} className={s.contactsInfoItem}>
                  <span className={s.contactsInfoIconWrapper}>
                    <Icon className={s.contactsInfoIcon} />
                  </span>
                  <span>{value}</span>
                </a>
              ))}
            </div>
          </div>
          <Socials
            items={socials}
            className={s.contactsSocials}
            linkClassName={s.contactsSocialLink}
            showLabel
          >
            {() => (
              <>
                <LongArrow className={s.contactsSocialsArrow} />
              </>
            )}
          </Socials>
        </div>
        <div className={s.contactsMapWrapper}>
          <iframe
            className={s.contactsMap}
            src="https://maps.google.com/maps?q=Jerzego%20Badury%2020,%2056-416%20Goszcz,%20Poland&z=16&output=embed"
            title="Mapa lokalizacji INSA Turbo"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={s.contactsAddress}>
            <LocationIcon className={s.contactsIcon} />
            <span>
              <strong>Адрес:</strong> Jerzego Badury 20, 56-416 Goszcz, Польша
            </span>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};
