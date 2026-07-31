import { Banner } from '@/shared/ui/Banner';
import s from './AboutUsBanner.module.scss';
import { ROUTES } from '@/app/router';

type GuaranteeBannerProps = {
  pageTitle: string;
};

export const AboutUsBanner = ({ pageTitle }: GuaranteeBannerProps) => {
  return (
    <Banner
      bannerTitle="Insa turbo — эксперт  по  шинам для  бездорожья"
      links={[
        {
          to: ROUTES.tires,
          linkName: 'перейти в каталог',
        },
      ]}
      breadcrumbs={[{ label: 'Главная', to: '/' }, { label: pageTitle }]}
      className={s.aboutUsBanner}
    >
      <>
        <span>Подбираем надёжные шины — для уверенного </span>
        <span>движения по грязи, камням и сложным маршрутам.</span>
      </>
    </Banner>
  );
};
