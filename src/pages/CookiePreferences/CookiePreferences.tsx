import { ROUTES } from '@/app/router';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';
import { LegalPageLayout } from '@/layouts/LegalPageLayout';
import { LegalContent } from '@/entities/legal/ui/LegalContent/LegalContent';
import { cookiesConfig } from '@/entities/legal/config/cookies';

export const CookiePreferences = () => {
  const seo = useSeo(undefined, undefined, ROUTES.cookiePreferences);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description ?? ''}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <LegalPageLayout title="pages.legal.cookies.title">
        <LegalContent sections={cookiesConfig} />
      </LegalPageLayout>
    </>
  );
};
