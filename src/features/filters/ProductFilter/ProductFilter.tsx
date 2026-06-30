import { type ProductFilterType } from '@/features/filters/model';
import { FILTER_VALUES } from '@/features/filters/config';

import s from './ProductFilter.module.scss';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { useSearchParams } from 'react-router-dom';
import {
  createSearchParams,
  getFormValuesFromSearchParams,
} from '@/shared/lib/helpers';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

export type ProductFilterProps = {
  className?: string;
  filterType: ProductFilterType;
};

export const ProductFilter = ({
  className,
  filterType,
}: ProductFilterProps) => {
  const fields = FILTER_VALUES[filterType].fields;
  const [searchParams, setSearchParams] = useSearchParams();

  type ProductFilterFormValues = Record<string, string>;

  const { register, watch, reset } = useForm<ProductFilterFormValues>({
    defaultValues: getFormValuesFromSearchParams(fields, searchParams),
  });

  useEffect(() => {
    const subscription = watch((values) => {
      const params = createSearchParams(values as ProductFilterFormValues);
      setSearchParams(params);
    });

    return () => subscription.unsubscribe();
  }, [watch, setSearchParams]);

  const handleReset = () => {
    reset(getFormValuesFromSearchParams(fields, new URLSearchParams()));

    setSearchParams({});
  };

  return (
    <div className={clsx(className, s.productFilter)}>
      <form className={s.productFilterForm}>
        <div className={s.filterFields}>
          {fields.map((field) => (
            <Select
              key={field.name}
              options={field.options}
              placeholder={field.placeholder}
              warpperClassName={s.productFilterSelectWrapper}
              className={s.productFilterSelect}
              iconClassName={s.productFilterSelectIcon}
              defaultValue=""
              {...register(field.name)}
            />
          ))}
        </div>

        <Button type="button" className={s.resetBtn} onClick={handleReset}>
          Сбросить фильтры
        </Button>
      </form>
    </div>
  );
};
