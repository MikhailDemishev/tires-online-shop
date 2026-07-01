import { Tabs } from '@/shared/ui/Tabs';

import { homeFilterTabs } from '@/features/filters/config';
import { FILTER_VALUES } from '@/features/filters/config';
import s from './HomeFilter.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { useNavigate } from 'react-router-dom';
import { createSearchParams } from '@/shared/lib/helpers';

export type HomeFilterProps = {
  className?: string;
};

export const HomeFilter = ({ className }: HomeFilterProps) => {
  const [type, setType] = useState<'tires' | 'wheels'>('tires');
  const { fields, route } = FILTER_VALUES[type];
  type HomeFilterFormValues = Record<string, string>;
  const { register, reset, watch, handleSubmit } =
    useForm<HomeFilterFormValues>();
  const values = watch();
  const isDisabled = !fields.some((field) => values[field.name]);
  const navigate = useNavigate();

  const onSubmit = (data: HomeFilterFormValues) => {
    const params = createSearchParams(data);
    const searchParams = new URLSearchParams(params);

    navigate(`${route}?${searchParams.toString()}`);
  };

  const handleTypeChange = (value: 'tires' | 'wheels') => {
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
              className={s.homeFilterFormSelect}
              iconClassName={s.homeFilterFormSelectIcon}
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
