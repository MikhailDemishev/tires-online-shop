export type ProductCharacteristic = {
  label: string;
  value: string | number;
  className?: string;
};

export type ProductDescription = {
  label: string;
  value: {
    en: string;
    pl: string;
    ru: string;
  };
  className?: string;
};
