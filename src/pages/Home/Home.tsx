import { HomeFilter } from '@/features/filters/ui/HomeFilter';
import { Advantages } from '@/widgets/Home/ui/Advantages';
import { Hero } from '@/widgets/Hero';
import s from './Home.module.scss';
import { PromoBanner } from '@/widgets/Home/ui/PromoBanner';
import { BrandIntro } from '@/widgets/Home/ui/BrandIntro';
import { FAQ } from '@/widgets/Home/ui/FAQ';
import { Assortment } from '@/widgets/Home/ui/Assortment';

export const Home = () => {
  return (
    <section className={s.home}>
      <Hero>
        <HomeFilter />
      </Hero>
      <Advantages />
      <PromoBanner />
      <BrandIntro />
      <Assortment />
      <FAQ />
    </section>
  );
};
