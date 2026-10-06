export type LegalTextPart = {
  value: string;
  accent?: 'bold' | 'link';
};

export type LegalText = string | readonly LegalTextPart[];

export type LegalTableData = {
  headers: readonly LegalText[];
  rows: readonly (readonly LegalText[])[];
};

export type LegalListItem = {
  text: LegalText;
  items?: readonly LegalListItem[];
  table?: LegalTableData;
};

export type LegalSubsectionConfig = {
  title: string;
  items: readonly LegalListItem[];
  className?: string;
};

export type LegalSectionConfig = {
  title: string;
  items?: readonly LegalListItem[];
  table?: LegalTableData;
  subsections?: readonly LegalSubsectionConfig[];
  className?: string;
};
