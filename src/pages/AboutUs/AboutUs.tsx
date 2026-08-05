import { AboutUsBanner } from '@/widgets/AboutUs/ui/AboutUsBanner';
import s from './AboutUs.module.scss';
import { AboutOverview } from '@/widgets/AboutUs/ui/CompanyStory';
import { OurTeam } from '@/widgets/AboutUs/ui/OurTeam';
import { OurValues } from '@/widgets/AboutUs/ui/OurValues';
import { HelpBanner } from '@/widgets/AboutUs/ui/HelpBanner';

export const AboutUs = () => {
  const title = 'pages.aboutUs.title';
  return (
    <section className={s.aboutUs}>
      <h1 className="visuallyHidden">{title}</h1>
      <AboutUsBanner pageTitle={title} />
      <AboutOverview />
      <OurTeam />
      <OurValues />
      <HelpBanner />
    </section>
  );
};
