import {
  type ProductFilterFormValues,
  type ProductFilterType,
} from '@/features/filters/model';
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
import { Checkbox } from '@/shared/ui/Checkbox';
import { PriceRangeFilter } from '@/features/filters/ui/PriceRangeFilter';

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

  const defaultValues = {
    ...getFormValuesFromSearchParams(fields, searchParams),
    priceFrom: searchParams.get('priceFrom') ?? '',
    priceTo: searchParams.get('priceTo') ?? '',
    inStock: false,
  };

  const { register, watch, reset, setValue } = useForm<ProductFilterFormValues>(
    {
      defaultValues,
    },
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const subscription = watch((values) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const params = createSearchParams(values as ProductFilterFormValues);
        setSearchParams(params);
      }, 300);
    });

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, [watch, setSearchParams]);

  const handleReset = () => {
    reset({
      ...getFormValuesFromSearchParams(fields, new URLSearchParams()),
      priceFrom: '',
      priceTo: '',
      inStock: false,
    });

    setSearchParams({});
  };

  return (
    <div className={clsx(className, s.productFilter)}>
      <form className={s.productFilterForm}>
        <Checkbox
          className={s.checkbox}
          labelClassName={s.label}
          label="в наличии"
          {...register('inStock')}
        />
        <div className={s.filterFields}>
          {fields.map((field) => (
            <Select
              key={field.name}
              options={field.options}
              placeholder={field.placeholder}
              wrapperClassName={s.productFilterSelectWrapper}
              className={s.productFilterSelect}
              iconClassName={s.productFilterSelectIcon}
              defaultValue=""
              {...register(field.name)}
            />
          ))}
        </div>

        <PriceRangeFilter
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <Button type="button" className={s.resetBtn} onClick={handleReset}>
          Сбросить фильтры
        </Button>
      </form>
    </div>
  );
};
