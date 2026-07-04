const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 4;

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePaginationParams = <T>() => {
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
      params.set('size', String(DEFAULT_PAGE_SIZE));
    }
    setSearchParams(params, { replace: true });
  }, [searchParams, setSearchParams]);

  return {
    ...Object.fromEntries(searchParams),
    page: Number(searchParams.get('page') ?? DEFAULT_PAGE),
    size: Number(searchParams.get('size') ?? DEFAULT_PAGE_SIZE),
  } as T;
};
