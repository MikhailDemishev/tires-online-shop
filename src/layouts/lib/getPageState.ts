export type PageStateVariant = 'loading' | 'error' | 'empty';

type GetPageStateParams = {
  isLoading?: boolean;
  isError?: boolean;
  isEmpty?: boolean;
};

export const getPageState = ({
  isLoading,
  isError,
  isEmpty,
}: GetPageStateParams): PageStateVariant | null => {
  if (isLoading) return 'loading';
  if (isError) return 'error';
  if (isEmpty) return 'empty';

  return null;
};
