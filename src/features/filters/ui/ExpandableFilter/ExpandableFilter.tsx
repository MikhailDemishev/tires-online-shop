import type { FieldPath, UseFormRegister } from 'react-hook-form';
import { type ProductFilterFormValues } from '@/features/filters/model';
import s from './ExpandableFilter.module.scss';
import { Checkbox } from '@/shared/ui/Checkbox';
import type { NamedEntity } from '@/shared/model/namedEntity';
import { Button } from '@/shared/ui/Button';

type ExpandableFilterProps = {
  filterLabel: string;
  options: NamedEntity[];
  name: FieldPath<ProductFilterFormValues>;
  register: UseFormRegister<ProductFilterFormValues>;
  visibleCount: number;
  onShowMore: () => void;
};

export const ExpandableFilter = ({
  options,
  filterLabel,
  name,
  visibleCount,
  onShowMore,
  register,
}: ExpandableFilterProps) => {
  const visibleOptions = options.slice(0, visibleCount);
  const hasMore = visibleCount < options.length;
  return (
    <div className={s.expandableFilter}>
      <span className={s.expandableFilterLabel}>{filterLabel}</span>
      <div className={s.expandableFilterFields}>
        {visibleOptions.map((option) => (
          <Checkbox
            key={option.id}
            label={option.name}
            value={option.name}
            {...register(name)}
          />
        ))}
      </div>
      {hasMore && (
        <Button
          type="button"
          variant="unset"
          className={s.expandableFilterButton}
          onClick={onShowMore}
        >
          Еще
        </Button>
      )}
    </div>
  );
};
