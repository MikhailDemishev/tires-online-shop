import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';

import type { LegalListItem, LegalText } from '../../model/commontypes';
import { LegalTable } from '@/entities/legal/ui/LegalTable/LegalTable';

import s from './LegalList.module.scss';

type Props = {
  items: readonly LegalListItem[];
  ordered?: boolean;
};

export const LegalList = ({ items, ordered = true }: Props) => {
  const { t } = useTranslation();
  const List = ordered ? 'ol' : 'ul';

  const renderText = (text: LegalText) => {
    if (Array.isArray(text)) {
      return text.map((part, index) =>
        part.accent ? (
          <span key={index} className={s[part.accent]}>
            {t(part.value)}
          </span>
        ) : (
          t(part.value)
        ),
      );
    }

    return t(text as string);
  };

  return (
    <List className={s.list}>
      {items.map((item, index) => (
        <li key={index} className={s.item}>
          <Text>{renderText(item.text)}</Text>

          {item.items?.length ? (
            <LegalList items={item.items} ordered={false} />
          ) : null}

          {item.table && <LegalTable {...item.table} />}
        </li>
      ))}
    </List>
  );
};
