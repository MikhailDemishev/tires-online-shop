import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Breadcrumbs } from '@/shared/ui/BreadCrumbs';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';

import s from './LegalPageLayout.module.scss';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
};

export const LegalPageLayout = ({
  title,
  children,
  className,
  titleClassName,
}: Props) => {
  const { t } = useTranslation();

  return (
    <section className={clsx(s.legalPageLayout, className)}>
      <div className="container">
        <div className={s.layoutWrapper}>
          <header className={s.header}>
            <Breadcrumbs
              items={[
                { label: t('pages.home.title'), to: '/' },
                { label: t(title) },
              ]}
              className={s.breadCrumbs}
            />

            <Text
              as="h1"
              variant="h1"
              className={clsx(s.title, titleClassName)}
            >
              {t(title)}
            </Text>
          </header>

          <div className={s.content}>{children}</div>
        </div>
      </div>
    </section>
  );
};
