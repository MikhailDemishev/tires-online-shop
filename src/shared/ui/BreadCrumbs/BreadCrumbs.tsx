import { Link } from 'react-router-dom';
import s from './BreadCrumbs.module.scss';
import { type BreadcrumbItem } from '@/shared/ui/BreadCrumbs';
import clsx from 'clsx';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  if (!items.length) return null;

  return (
    <nav aria-label="breadcrumbs">
      <ul className={clsx(className, s.breadcrumbs)}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.to ?? item.label}-${index}`}
              className={s.breadcrumbsItem}
            >
              {isLast || !item.to ? (
                <span aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
