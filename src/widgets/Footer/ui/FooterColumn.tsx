type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  className: string;
  titleClassName: string;
};

export const FooterColumn = ({
  title,
  className,
  titleClassName,
  children,
}: FooterColumnProps) => (
  <li className={className}>
    <h3 className={titleClassName}>{title}</h3>
    {children}
  </li>
);
