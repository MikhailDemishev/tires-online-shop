import { Button } from '@/shared/ui/Button';
import s from './Pagination.module.scss';
import clsx from 'clsx';
import { Arrow } from '@/assets/icons';
import { useSearchParams } from 'react-router-dom';

type Pagination = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages }: Pagination) => {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);
  const DOTS = 'dots';
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (pageNumber: string | number) => {
    if (+pageNumber < 1 || +pageNumber > totalPages) {
      return;
    }

    console.log(pageNumber, 'pageNumber');

    const params = new URLSearchParams(searchParams);
    params.set('page', String(pageNumber));
    setSearchParams(params);
  };

  const visiblePages = (() => {
    switch (true) {
      case totalPages <= 7:
        return pages;

      case currentPage <= 3:
        return [1, 2, 3, 4, DOTS, totalPages];

      case currentPage >= totalPages - 2:
        return [
          1,
          DOTS,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];

      default:
        return [
          1,
          DOTS,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          DOTS,
          totalPages,
        ];
    }
  })();

  return (
    <div className={s.pagination}>
      <Button
        variant="unset"
        className={clsx(s.arrowBtn, s.previous)}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <Arrow />
      </Button>

      {visiblePages.map((item, index) =>
        item === DOTS ? (
          <span key={`dots-${index}`} className={s.dots}>
            ...
          </span>
        ) : (
          <Button
            key={item}
            variant="unset"
            className={clsx(s.paginationBtn, item === currentPage && s.active)}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </Button>
        ),
      )}

      <Button
        variant="unset"
        className={clsx(s.arrowBtn, s.next)}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <Arrow />
      </Button>
    </div>
  );
};
