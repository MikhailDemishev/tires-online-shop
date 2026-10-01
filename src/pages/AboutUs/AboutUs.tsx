import { AboutUsBanner } from '@/widgets/AboutUs/ui/AboutUsBanner';
import s from './AboutUs.module.scss';
import { AboutOverview } from '@/widgets/AboutUs/ui/CompanyStory';
import { OurTeam } from '@/widgets/AboutUs/ui/OurTeam';
import { OurValues } from '@/widgets/AboutUs/ui/OurValues';
import { HelpBanner } from '@/widgets/AboutUs/ui/HelpBanner';
import { useSeo } from '@/features/seo/lib';
import { ROUTES } from '@/app/router';
import { Seo } from '@/features/seo/ui';

export const AboutUs = () => {
  const title = 'pages.aboutUs.title';

  const seo = useSeo(undefined, undefined, ROUTES.aboutUs);
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      <section className={s.aboutUs}>
        <h1 className="visuallyHidden">{title}</h1>
        <AboutUsBanner pageTitle={title} />
        <AboutOverview />
        <OurTeam />
        <OurValues />
        <HelpBanner />
      </section>
    </>
  );
};
