import type { ReactNode } from 'react';
import s from './Socials.module.scss';
import clsx from 'clsx';
import { useTranslation } from '@/shared/lib/hooks';

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
  const { t } = useTranslation();
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
            aria-label={t(label)}
            className={clsx(s.link, linkClassName)}
          >
            <span className={clsx(s.labelBlock, labelBlockClassName)}>
              <Icon className={s.icon} />
              {showLabel && <span>{t(label)}</span>}
            </span>

            {children?.(item)}
          </a>
        );
      })}
    </div>
  );
};
