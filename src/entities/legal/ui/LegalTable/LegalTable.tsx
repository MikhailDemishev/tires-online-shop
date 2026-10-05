import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';

import s from './LegalTable.module.scss';
import type { LegalTableData, LegalText } from '../../model/commontypes';

export const LegalTable = ({ headers, rows }: LegalTableData) => {
  const { t } = useTranslation();

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
    <table className={s.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              <Text>{renderText(header)}</Text>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <Text>{renderText(cell)}</Text>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
