import s from './Socials.module.scss';
import clsx from 'clsx';

type SocialItem = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

type SocialsProps = {
  items: readonly SocialItem[];
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
};

export const Socials = ({
  items,
  className,
  linkClassName,
  iconClassName,
}: SocialsProps) => {
  return (
    <div className={clsx(s.socials, className)}>
      {items.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={clsx(s.link, linkClassName)}
        >
          <Icon className={clsx(s.icon, iconClassName)} />
        </a>
      ))}
    </div>
  );
};
