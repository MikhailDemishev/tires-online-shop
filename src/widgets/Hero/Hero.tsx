import clsx from 'clsx';
import s from './Hero.module.scss';
type HeroProps = {
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
};

export const Hero = ({ children, className, classNameContent }: HeroProps) => {
  return (
    <section className={clsx(className, s.hero)}>
      <div className={clsx(s.heroContent, classNameContent, 'container')}>
        {children}
      </div>
    </section>
  );
};
