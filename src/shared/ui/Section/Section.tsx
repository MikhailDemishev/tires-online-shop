import clsx from 'clsx';
import s from './Section.module.scss';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export const Section = ({
  title,
  children,
  className,
  titleClassName,
}: SectionProps) => {
  return (
    <section className={clsx(s.section, className)}>
      <div className="container">
        <h2 className={clsx(s.title, titleClassName)}>{title}</h2>
        {children}
      </div>
    </section>
  );
};
