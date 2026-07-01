import {
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormWatch,
} from 'react-hook-form';
import { Input } from '@/shared/ui/Input';

import s from './PriceRangeFilter.module.scss';
import {
  filterPriceFields,
  MIN_PRICE,
  MAX_PRICE,
  PRICE_STEP,
} from '@/features/filters/config';
import { type ProductFilterFormValues } from '@/features/filters/model';
import { Range } from 'react-range';

type PriceRangeFilterProps = {
  register: UseFormRegister<ProductFilterFormValues>;
  watch: UseFormWatch<ProductFilterFormValues>;
  setValue: UseFormSetValue<ProductFilterFormValues>;
};

export const PriceRangeFilter = ({
  register,
  watch,
  setValue,
}: PriceRangeFilterProps) => {
  const priceFrom = Number(watch('priceFrom') || MIN_PRICE);
  const priceTo = Number(watch('priceTo') || MAX_PRICE);
  const handlePriceInput = (e: React.InputEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
  };

  return (
    <div className={s.priceRangeFilter}>
      <span className={s.priceRangeFilterTitle}>Цена</span>

      <Range
        values={[priceFrom, priceTo]}
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={PRICE_STEP}
        onChange={([from, to]) => {
          setValue('priceFrom', String(from), { shouldDirty: true });
          setValue('priceTo', String(to), { shouldDirty: true });
        }}
        renderTrack={({ props, children }) => (
          <div {...props} className={s.priceRangeFilterTrack}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;

          return (
            <div key={key} {...restProps} className={s.priceRangeFilterThumb} />
          );
        }}
      />

      <div className={s.priceRangeFilterInputs}>
        {filterPriceFields.map(({ label, name }) => (
          <label key={name} className={s.priceRangeFilterField}>
            <span className={s.priceRangeFilterlabel}>{label}</span>

            <Input
              type="text"
              inputMode="numeric"
              className={s.priceRangeFilterInput}
              {...register(name)}
              onInput={handlePriceInput}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
