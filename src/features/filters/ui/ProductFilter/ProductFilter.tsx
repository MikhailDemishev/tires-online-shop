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
  console.log('fields', fields);
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

  //моковые данные для показа

  // const mockManufacturers = [
  //   {
  //     id: 1,
  //     name: 'Insaturbo',
  //     description: 'Good for the road. Good for nature. Good for your pocket',
  //     url: 'https://www.insaturbo.com',
  //     createdDate: '2024-12-19T08:44:39.000+00:00',
  //   },
  //   {
  //     id: 2,
  //     name: 'Michelin',
  //     description: 'Premium tires for passenger cars and SUVs.',
  //     url: 'https://www.michelin.com',
  //     createdDate: '2025-01-05T10:15:00.000+00:00',
  //   },
  //   {
  //     id: 3,
  //     name: 'Bridgestone',
  //     description: 'Reliable performance in all weather conditions.',
  //     url: 'https://www.bridgestone.com',
  //     createdDate: '2025-01-12T14:20:00.000+00:00',
  //   },
  //   {
  //     id: 4,
  //     name: 'Goodyear',
  //     description: 'Innovation and safety for everyday driving.',
  //     url: 'https://www.goodyear.com',
  //     createdDate: '2025-01-18T09:30:00.000+00:00',
  //   },
  //   {
  //     id: 5,
  //     name: 'Continental',
  //     description: 'German engineering with excellent wet grip.',
  //     url: 'https://www.continental-tires.com',
  //     createdDate: '2025-02-01T12:00:00.000+00:00',
  //   },
  //   {
  //     id: 6,
  //     name: 'Pirelli',
  //     description: 'High-performance tires for sports vehicles.',
  //     url: 'https://www.pirelli.com',
  //     createdDate: '2025-02-10T11:45:00.000+00:00',
  //   },
  //   {
  //     id: 7,
  //     name: 'Hankook',
  //     description: 'Balanced performance and excellent value.',
  //     url: 'https://www.hankooktire.com',
  //     createdDate: '2025-02-18T16:25:00.000+00:00',
  //   },
  //   {
  //     id: 8,
  //     name: 'Yokohama',
  //     description: 'Advanced tire technology from Japan.',
  //     url: 'https://www.yokohama.com',
  //     createdDate: '2025-03-03T08:10:00.000+00:00',
  //   },
  //   {
  //     id: 9,
  //     name: 'Nokian Tyres',
  //     description: 'Specialized in winter and all-season tires.',
  //     url: 'https://www.nokiantyres.com',
  //     createdDate: '2025-03-15T13:40:00.000+00:00',
  //   },
  //   {
  //     id: 10,
  //     name: 'BFGoodrich',
  //     description: 'Built for off-road adventures and durability.',
  //     url: 'https://www.bfgoodrichtires.com',
  //     createdDate: '2025-03-28T17:55:00.000+00:00',
  //   },
  // ];

  //Данные для фильтров по производителей

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
