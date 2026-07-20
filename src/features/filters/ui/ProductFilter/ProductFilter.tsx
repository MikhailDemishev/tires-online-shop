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
import { ExpandableFilter } from '@/features/filters/ui/ExpandableFilter';
import { protectors } from '@/shared/config';

const INITIAL_VISIBLE_MANUFACTURERS = 4;
const INITIAL_VISIBLE_PROTECTORS = 4;

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
    manufacturer: searchParams.getAll('manufacturer'),
    protector: searchParams.getAll('protector'),
  };

  const { register, watch, reset, setValue } = useForm<ProductFilterFormValues>(
    {
      defaultValues,
    },
  );

  const { data, isLoading, isError } = useGetManufacturersQuery();
  const manufacturers = data ?? [];

  const [initialSelectedProtectors] = useState(() =>
    searchParams.getAll('protector'),
  );

  const sortedProtectors = [
    ...protectors.filter((p) => initialSelectedProtectors.includes(p.name)),
    ...protectors.filter((p) => !initialSelectedProtectors.includes(p.name)),
  ];

  const [visibleManufacturerCount, setVisibleManufacturerCount] = useState(
    INITIAL_VISIBLE_MANUFACTURERS,
  );

  const [visibleProtectorCount, setVisibleProtectorCount] = useState(
    INITIAL_VISIBLE_PROTECTORS,
  );

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
      protector: [],
    });
    setVisibleManufacturerCount(INITIAL_VISIBLE_MANUFACTURERS);
    setVisibleProtectorCount(INITIAL_VISIBLE_PROTECTORS);
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
            <ExpandableFilter
              filterLabel="бренд"
              name="manufacturer"
              visibleCount={visibleManufacturerCount}
              options={manufacturers}
              register={register}
              onShowMore={() =>
                setVisibleManufacturerCount(
                  (c) => c + INITIAL_VISIBLE_MANUFACTURERS,
                )
              }
            />
          )}

        {page === 'tires' && (
          <ExpandableFilter
            filterLabel="протектор"
            name="protector"
            visibleCount={visibleProtectorCount}
            options={sortedProtectors}
            register={register}
            onShowMore={() =>
              setVisibleProtectorCount((c) => c + INITIAL_VISIBLE_PROTECTORS)
            }
          />
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
