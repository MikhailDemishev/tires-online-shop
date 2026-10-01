import { ROUTES } from '@/app/router';
import s from './Terms.module.scss';
import { useSeo } from '@/features/seo/lib';
import { Seo } from '@/features/seo/ui';

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
      <div className={s.terms}>Terms of Use</div>
    </>
  );
};
