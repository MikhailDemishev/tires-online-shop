import { type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Input } from '@/shared/ui/Input';
import s from './Checkbox.module.scss';
import { Tick } from '@/assets/icons';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelClassName?: string;
};

export const Checkbox = ({
  label,
  className,
  labelClassName,
  ...props
}: CheckboxProps) => {
  return (
    <label className={clsx(s.checkbox, className)}>
      <div className={s.control}>
        <Input type="checkbox" className={s.checkboxInput} {...props} />
        <Tick className={s.indicator} />
      </div>
      <span className={clsx(labelClassName, s.checkboxLabel)}>{label}</span>
    </label>
  );
};
