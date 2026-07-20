import clsx from 'clsx';
import s from './Section.module.scss';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  hasWrapper?: boolean;
};

export const Section = ({
  title,
  children,
  className,
  titleClassName,
  hasWrapper,
}: SectionProps) => {
  return (
    <section className={clsx(s.section, className)}>
      <div className="container">
        <div className={clsx(hasWrapper && s.wrapper)}>
          <h2 className={clsx(s.title, titleClassName)}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};
