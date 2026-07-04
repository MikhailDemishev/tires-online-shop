import { type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';
import { Slot } from '@radix-ui/react-slot';

export type VariantBtn = 'primary' | 'secondary' | 'unset';

type Props = {
  variant?: VariantBtn;
  fullWidth?: boolean;
  asChild?: boolean;
  loading?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  variant = 'primary',
  fullWidth = false,
  asChild,
  className,
  loading,
  children,
  disabled,
  ...props
}: Props) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...props}
      className={clsx(s.root, s[variant], fullWidth && s.fullWidth, className)}
      disabled={disabled || loading}
    >
      {loading ? <div>Грузится</div> : children}
    </Comp>
  );
};
