type SearchParamValue = string | boolean | string[] | undefined;
export const createSearchParams = (
  values: Record<string, SearchParamValue>,
) => {
  const params = new URLSearchParams();

  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === 'string' && value) {
      params.set(key, value);
    }

    if (typeof value === 'boolean' && value) {
      params.set(key, 'true');
    }

    if (Array.isArray(value) && value.length > 0) {
      params.set(key, value.join(','));
    }
  });

  return params;
};
