export type TranslationNode =
  | string
  | undefined
  | TranslationNode[]
  | { [key: string]: TranslationNode };
