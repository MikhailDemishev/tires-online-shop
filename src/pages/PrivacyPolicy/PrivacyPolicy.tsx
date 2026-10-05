import { ROUTES } from '@/app/router';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';
import { LegalPageLayout } from '@/layouts/LegalPageLayout';
import { LegalContent } from '@/entities/legal/ui/LegalContent/LegalContent';
import { privacyConfig } from '@/entities/legal/config/privacy';

export const PrivacyPolicy = () => {
  const seo = useSeo(undefined, undefined, ROUTES.privacyPolicy);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <LegalPageLayout title="pages.legal.privacy.title">
        <LegalContent sections={privacyConfig} />
      </LegalPageLayout>
    </>
  );
};
