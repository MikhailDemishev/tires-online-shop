import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';

import s from './Select.module.scss';
import { ArrowSelect } from '@/assets/icons';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
} & ComponentPropsWithoutRef<'select'>;

export const Select = ({
  options,
  placeholder,
  className,
  ...props
}: SelectProps) => {
  return (
    <div className={s.selectWrapper}>
      <select className={clsx(s.select, className)} {...props}>
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
      <span className={s.iconBox}>
        <ArrowSelect className={s.icon} />
      </span>
    </div>
  );
};
