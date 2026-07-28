import type { ReactNode } from 'react';
import s from './Socials.module.scss';
import clsx from 'clsx';

export type SocialItem = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

type SocialsProps = {
  items: readonly SocialItem[];
  className?: string;
  linkClassName?: string;
  labelBlockClassName?: string;
  showLabel?: boolean;
  children?: (item: SocialItem) => ReactNode;
};

export const Socials = ({
  items,
  className,
  linkClassName,
  labelBlockClassName,
  showLabel = false,
  children,
}: SocialsProps) => {
  return (
    <div className={clsx(s.socials, className)}>
      {items.map((item) => {
        const { Icon, href, label } = item;

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={clsx(s.link, linkClassName)}
          >
            <span className={clsx(s.labelBlock, labelBlockClassName)}>
              <Icon className={s.icon} />
              {showLabel && <span>{label}</span>}
            </span>

            {children?.(item)}
          </a>
        );
      })}
    </div>
  );
};
