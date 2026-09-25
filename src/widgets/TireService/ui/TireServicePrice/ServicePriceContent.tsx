import { useTranslation } from '@/shared/lib/hooks';
import type { TIRE_SERVICES } from '../../config';
import s from './TireServicePrice.module.scss';
import { Text } from '@/shared/ui/Text';

type Price = (typeof TIRE_SERVICES)[number]['price'];

export const ServicePriceContent = ({ price }: { price: Price }) => {
  const { t, tObject } = useTranslation();

  const columns = tObject<string[]>(price.columns) ?? [];
  const rows = tObject<string[][]>(price.rows) ?? [];
  const notes = tObject<string[]>(price.notes) ?? [];

  return (
    <div className={s.prices}>
      <div className={s.pricesTableWrapper}>
        <table className={s.pricesTable}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>
                  <Text variant="bodySmall" className={s.headerText}>
                    {column}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className={s.row}>
                {row.map((cell) => (
                  <td key={cell}>
                    <Text className={s.bodyText}> {cell}</Text>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Text variant="ultraSmall" className={s.pricesNote}>
        {t(price.description)}
      </Text>

      {price.notesTitle && (
        <p className={s.pricesTitle}>{t(price.notesTitle)}</p>
      )}

      {notes.length > 1 ? (
        <ul className={s.priceNotes}>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : (
        <Text variant="ultraSmall" className={s.pricesNote}>
          {notes[0]}
        </Text>
      )}
    </div>
  );
};
