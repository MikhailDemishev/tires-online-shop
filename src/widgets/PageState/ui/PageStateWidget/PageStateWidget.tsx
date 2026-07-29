import { Loader } from '@/shared/ui/Loader';
import s from './PageStateWidget.module.scss';
import { ErrorState } from '../ErrorState/ErrorState';
type PageStateWidgetProps = {
  title: string;
  variant: 'loading' | 'error' | 'empty';
};

export const PageStateWidget = ({ title, variant }: PageStateWidgetProps) => {
  return (
    <section className={s.pageState}>
      <h1 className="visuallyHidden">{title}</h1>

      <div className={s.pageStateContent}>
        {variant === 'error' && <ErrorState />}
        {variant === 'loading' && <Loader />}
        {variant === 'empty' && <p>Ничего не найдено</p>}
      </div>
    </section>
  );
};
