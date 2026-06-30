type Field = {
  name: string;
};

export const getFormValuesFromSearchParams = (
  fields: readonly Field[],
  searchParams: URLSearchParams,
) =>
  Object.fromEntries(
    fields.map(({ name }) => [name, searchParams.get(name) ?? '']),
  );
