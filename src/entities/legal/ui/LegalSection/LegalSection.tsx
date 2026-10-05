import type { ReactNode } from 'react';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';

import s from './LegalSection.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export const LegalSection = ({ title, children }: Props) => {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <Text as="h2" variant="h3">
        {t(title)}
      </Text>

      <div className={s.content}>{children}</div>
    </section>
  );
};
