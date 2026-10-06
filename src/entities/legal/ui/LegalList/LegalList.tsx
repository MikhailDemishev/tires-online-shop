import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';

import type { LegalListItem, LegalText } from '../../model/commontypes';
import { LegalTable } from '@/entities/legal/ui/LegalTable/LegalTable';

import s from './LegalList.module.scss';
import clsx from 'clsx';

type Props = {
  items: readonly LegalListItem[];
  ordered?: boolean;
  className?: string;
};

export const LegalList = ({ items, ordered = true, className }: Props) => {
  const { t } = useTranslation();
  const List = ordered ? 'ol' : 'ul';

  console.log('className', className);

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
    <List className={clsx(s.list, className && s[className])}>
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
