import { HomeFilter } from '@/features/filters/ui/HomeFilter';
import { Advantages } from '@/widgets/Advantages/ui';
import { Hero } from '@/widgets/Hero';
import s from './Home.module.scss';
import { PromoBanner } from '@/widgets/PromoBanner/';
import { BrandIntro } from '@/widgets/BrandIntro/ui';

export const Home = () => {
  return (
    <section className={s.home}>
      <Hero>
        <HomeFilter />
      </Hero>
      <Advantages />
      <PromoBanner />
      <BrandIntro />
    </section>
  );
};
