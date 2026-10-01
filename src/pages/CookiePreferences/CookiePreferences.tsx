import { ROUTES } from '@/app/router';
import s from './CookiePreferences.module.scss';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';

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
      <div className={s.cookiePreferences}>Cookie Preferences</div>
    </>
  );
};
