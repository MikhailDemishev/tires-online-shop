import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';

import s from './Select.module.scss';
import { Arrow } from '@/assets/icons';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
  iconClassName?: string;
  warpperClassName?: string;
} & ComponentPropsWithoutRef<'select'>;

export const Select = ({
  options,
  placeholder,
  className,
  iconClassName,
  warpperClassName,
  ...props
}: SelectProps) => {
  return (
    <div className={clsx(warpperClassName, s.selectWrapper)}>
      <select className={clsx(className, s.select)} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Arrow className={clsx(iconClassName, s.icon)} />
    </div>
  );
};
