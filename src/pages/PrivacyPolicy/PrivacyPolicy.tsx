import { ROUTES } from '@/app/router';
import s from './PrivacyPolicy.module.scss';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';

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
      <div className={s.privacyPolicy}>Privacy Policy</div>
    </>
  );
};
