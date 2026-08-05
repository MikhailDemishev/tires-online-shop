import clsx from 'clsx';
import s from './Hero.module.scss';
import { useTranslation } from '@/shared/lib/hooks';
type HeroProps = {
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
};

export const Hero = ({ children, className, classNameContent }: HeroProps) => {
  const { t } = useTranslation();
  return (
    <section className={clsx(className, s.hero)}>
      <div className="container">
        <div className={clsx(s.heroContent, classNameContent)}>
          <h1 className={s.heroTitle}>{t('pages.home.hero.title')}</h1>
          {children}
        </div>
      </div>
    </section>
  );
};
