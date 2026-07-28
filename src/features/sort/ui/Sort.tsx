import { Select } from '@/shared/ui/Select';
import s from './Sort.module.scss';
import type { SortOption } from '@/features/sort/model';

import { useSearchParams } from 'react-router-dom';
import { findSortOption, findInitialSortValue } from '@/features/sort/lib';
import clsx from 'clsx';

export type SortProps = {
  sortOptions: SortOption[];
  className?: string;
};

export const Sort = ({ sortOptions, className }: SortProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortField = searchParams.get('sortField');
  const sortDirection = searchParams.get('sortDirection');
  const size = searchParams.get('size');
  //Либо берем значение на основе данных из урл, либо дефолтное из конфига
  const sortValue =
    findInitialSortValue(sortOptions, sortField, sortDirection)?.value ??
    findSortOption(sortOptions, 'default')?.value;

  console.log('sortValue', sortValue);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //1. Выбираем уникальный параметр конфига
    const selectedValue = e.target.value;

    // 2. Создаем копию текущих query-параметров
    const params = new URLSearchParams(searchParams);

    // 3. Удаляем предыдущую сортировку
    params.delete('sortField');
    params.delete('sortDirection');
    params.delete('page');
    params.delete('size');

    //4.  ищем параметры  поиска и направления в конфиге, которые передадим в url

    const selectedOption = findSortOption(sortOptions, selectedValue);

    if (!selectedOption) {
      return;
    }
    const newSortField = selectedOption.searchParameter;
    const newSortDirection = selectedOption.direction;

    // 5. Устанавливаем новую сортировку
    if (newSortField) params.set('sortField', newSortField);
    if (newSortDirection) params.set('sortDirection', newSortDirection);

    //чисто косметически удаляем size и заново пишем старое значение, чтобы порядок един был
    if (size) {
      params.set('size', size);
    }

    // 4. Обновляем URL

    setSearchParams(params);
  };
  return (
    <Select
      options={sortOptions}
      name="sort"
      value={sortValue}
      wrapperClassName={clsx(className, s.sortFilter)}
      className={s.sortSelect}
      iconClassName={s.sortSelectIcon}
      onChange={handleSortChange}
    />
  );
};
