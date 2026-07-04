export const createPaginationParams = <T extends { page?: number }>(
  params: T,
) => ({
  ...params,
  page: params.page != null ? params.page - 1 : undefined,
});
