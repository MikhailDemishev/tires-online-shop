import clsx from 'clsx';
import { type ComponentPropsWithoutRef } from 'react';

import s from './Select.module.scss';
import { Arrow } from '@/assets/icons';
import { useTranslation } from '@/shared/lib/hooks';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
  iconClassName?: string;
  optionClassName?: string;
  noIcon?: boolean;
  wrapperClassName?: string;
  name?: string;
} & ComponentPropsWithoutRef<'select'>;

export const Select = ({
  options,
  placeholder,
  className,
  iconClassName,
  optionClassName,
  wrapperClassName,
  noIcon,
  name,
  ...props
}: SelectProps) => {
  const { t } = useTranslation();
  return (
    <div className={clsx(wrapperClassName, s.selectWrapper)}>
      <select className={clsx(className, s.select)} name={name} {...props}>
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={optionClassName}
          >
            {t(option.label)}
          </option>
        ))}
      </select>
      {!noIcon && <Arrow className={clsx(iconClassName, s.icon)} />}
    </div>
  );
};
