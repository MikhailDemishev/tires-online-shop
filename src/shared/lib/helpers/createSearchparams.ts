export const createSearchParams = (
  values: Record<string, string | boolean>,
) => {
  const params: Record<string, string> = {};

  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === 'string' && value) {
      params[key] = value;
    }
  });

  return params;
};
