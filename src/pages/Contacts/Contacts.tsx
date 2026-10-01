import { InfoPageLayout } from '@/layouts/InfoPageLayout';
import s from './Contacts.module.scss';
import { ContactsBlock } from '@/widgets/Contacts';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';

export const Contacts = () => {
  const seo = useSeo(undefined, undefined, '/about-us');
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <InfoPageLayout
        title="pages.contacts.title"
        className={s.contactsPage}
        titleClassName={s.contactsPageTitle}
      >
        <ContactsBlock />
      </InfoPageLayout>
    </>
  );
};
