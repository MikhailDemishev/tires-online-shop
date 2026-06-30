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
import { useNavigate } from 'react-router-dom';

export type HomeFilterProps = {
  className?: string;
};

export const HomeFilter = ({ className }: HomeFilterProps) => {
  const [type, setType] = useState<'tire' | 'wheel'>('tire');

  const fields = type === 'tire' ? homeTireFilterFields : homeWheelFilterFields;
  type HomeFilterFormValues = Record<string, string>;

  const { register, reset, watch, handleSubmit } =
    useForm<HomeFilterFormValues>();

  const values = watch();
  const isDisabled = !fields.some((field) => values[field.name]);

  const navigate = useNavigate();

  const onSubmit = (data: HomeFilterFormValues) => {
    const params = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const path = type === 'tire' ? '/tires' : '/wheels';

    navigate(`${path}?${params.toString()}`);
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

        <Button type="submit" className={s.submitBtn} disabled={isDisabled}>
          Подобрать
        </Button>
      </form>
    </div>
  );
};
