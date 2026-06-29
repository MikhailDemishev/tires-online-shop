import { Tabs } from '@/shared/ui/Tabs';

import {
  homeFilterTabs,
  homeTireFilterFields,
  homeWheelFilterFields,
} from '@/features/filters/home/config';
import s from './HomeFilter.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/button';
import { Select } from '@/shared/ui/Select';

export type HomeFilterProps = {
  className?: string;
};

export const HomeFilter = ({ className }: HomeFilterProps) => {
  const [type, setType] = useState<'tire' | 'wheel'>('tire');

  const fields = type === 'tire' ? homeTireFilterFields : homeWheelFilterFields;
  type HomeFilterFormValues = Record<string, string>;

  const { register, reset, handleSubmit } = useForm<HomeFilterFormValues>();

  const onSubmit = (data: HomeFilterFormValues) => {
    console.log(data);
  };

  const handleTypeChange = (value: 'tire' | 'wheel') => {
    setType(value);
    reset();
  };

  return (
    <div className={clsx(className, s.homeFilter)}>
      <Tabs
        value={type}
        className={s.tabs}
        onChange={handleTypeChange}
        items={homeFilterTabs}
      />
      <form className={s.homeFilterForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fields}>
          {fields.map((field) => (
            <Select
              key={field.name}
              options={field.options}
              placeholder={field.placeholder}
              defaultValue=""
              {...register(field.name)}
            />
          ))}
        </div>

        <Button type="submit" fullWidth className={s.submitBtn}>
          Подобрать
        </Button>
      </form>
    </div>
  );
};
