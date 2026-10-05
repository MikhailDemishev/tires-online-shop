import { ROUTES } from '@/app/router';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';
import { LegalPageLayout } from '@/layouts/LegalPageLayout';
import { LegalContent } from '@/entities/legal/ui/LegalContent/LegalContent';
import { termsConfig } from '@/entities/legal/config/terms';

export const Terms = () => {
  const seo = useSeo(undefined, undefined, ROUTES.terms);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <LegalPageLayout title="pages.legal.terms.title">
        <LegalContent sections={termsConfig} />
      </LegalPageLayout>
    </>
  );
};
