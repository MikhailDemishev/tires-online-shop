export const createSearchParams = (data: Record<string, string>) => {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  return params;
};
