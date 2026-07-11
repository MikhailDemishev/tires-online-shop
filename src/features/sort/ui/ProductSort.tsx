import { Select } from '@/shared/ui/Select';
import s from './ProductSort.module.scss';
import { SORT_OPTIONS } from '@/features/sort/config';
import { useSearchParams } from 'react-router-dom';

const DEFAULT_SORT = 'popular';

export const ProductSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortField = searchParams.get('sortField');
  const sortDirection = searchParams.get('sortDirection');
  const size = searchParams.get('size');

  const sortValue =
    sortField === 'price'
      ? (sortDirection ?? DEFAULT_SORT)
      : (sortField ?? DEFAULT_SORT);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // 1. Создаем копию текущих query-параметров
    const params = new URLSearchParams(searchParams);

    // 2. Удаляем предыдущую сортировку
    params.delete('sortField');
    params.delete('sortDirection');
    params.delete('page');
    params.delete('size');
    // 3. Устанавливаем новую сортировку
    if (value !== 'default') {
      if (value === 'asc' || value === 'desc') {
        params.set('sortField', 'price');
        params.set('sortDirection', value);
      } else {
        params.set('sortField', value);
      }
    }

    //чисто косметически удаляем size и заново пишем старое значение, чтобы порядок един был
    if (size) {
      params.set('size', size);
    }

    // 4. Обновляем URL

    setSearchParams(params);
  };
  return (
    <Select
      options={SORT_OPTIONS}
      value={sortValue}
      wrapperClassName={s.sortFilter}
      className={s.productSortSelect}
      iconClassName={s.productSortSelectIcon}
      onChange={handleSortChange}
    />
  );
};
