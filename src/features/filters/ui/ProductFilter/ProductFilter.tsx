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
import { useEffect, useState } from 'react';
import { Checkbox } from '@/shared/ui/Checkbox';
import { PriceRangeFilter } from '@/features/filters/ui/PriceRangeFilter';
import { useGetManufacturersQuery } from '@/entities/manufacturer/api';

export type ProductFilterProps = {
  className?: string;
  filterType: ProductFilterType;
  page?: string;
};

export const ProductFilter = ({
  className,
  filterType,
  page,
}: ProductFilterProps) => {
  const fields = FILTER_VALUES[filterType].fields;
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = {
    ...getFormValuesFromSearchParams(fields, searchParams),
    priceFrom: searchParams.get('priceFrom') ?? '',
    priceTo: searchParams.get('priceTo') ?? '',
    inStock: false,
    manufacturer: searchParams.getAll('manufacturer') ?? [],
  };

  const { register, watch, reset, setValue } = useForm<ProductFilterFormValues>(
    {
      defaultValues,
    },
  );

  const { data, isLoading, isError } = useGetManufacturersQuery();
  const manufacturers = data ?? [];

  const INITIAL_VISIBLE_MANUFACTURERS = 4;
  const [visibleCount, setVisibleCount] = useState(
    INITIAL_VISIBLE_MANUFACTURERS,
  );

  const visibleManufacturers = manufacturers.slice(0, visibleCount);
  const hasMore = visibleCount < manufacturers.length;

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const subscription = watch((values) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setSearchParams((currentParams) =>
          createSearchParams(values as ProductFilterFormValues, currentParams),
        );
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
      manufacturer: [],
    });
    setVisibleCount(INITIAL_VISIBLE_MANUFACTURERS);
    setSearchParams({});
  };

  return (
    <div className={clsx(className, s.productFilter)}>
      <form className={s.productFilterForm}>
        <Checkbox
          className={s.inStockCheckbox}
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
        {page === 'tires' &&
          !isError &&
          !isLoading &&
          manufacturers.length > 0 && (
            <div className={s.manufacturerFilter}>
              <span className={s.manufacturerFilterLabel}>бренд</span>
              <div className={s.manufacturerFilterFields}>
                {visibleManufacturers.map((manufacturer) => (
                  <Checkbox
                    key={manufacturer.id}
                    label={manufacturer.name}
                    value={manufacturer.name}
                    {...register('manufacturer')}
                  />
                ))}
              </div>
              {hasMore && (
                <Button
                  type="button"
                  variant="unset"
                  className={s.manufacturerFilterButton}
                  onClick={() =>
                    setVisibleCount((c) => c + INITIAL_VISIBLE_MANUFACTURERS)
                  }
                >
                  Еще
                </Button>
              )}
            </div>
          )}

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
