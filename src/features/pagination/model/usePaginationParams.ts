const DEFAULT_PAGE = 1;
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type PaginationOptions = {
  defaultPageSize?: number;
};

export const usePaginationParams = <T>({
  defaultPageSize = 8,
}: PaginationOptions = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('page') && searchParams.has('size')) {
      return;
    }

    const params = new URLSearchParams(searchParams);

    if (!params.has('page')) {
      params.set('page', String(DEFAULT_PAGE));
    }

    if (!params.has('size')) {
      params.set('size', String(defaultPageSize));
    }
    setSearchParams(params, { replace: true });
  }, [searchParams, setSearchParams, defaultPageSize]);

  return {
    ...Object.fromEntries(searchParams),
    page: Number(searchParams.get('page') ?? DEFAULT_PAGE),
    size: Number(searchParams.get('size') ?? defaultPageSize),
  } as T;
};
