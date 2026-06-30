import s from './Pagination.module.scss';

type Pagination = {
  currentPage?: string;
  totalPages?: string;
  onPageChange?: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Pagination) => {
  return <div className={s.pagination}>pagination</div>;
};
