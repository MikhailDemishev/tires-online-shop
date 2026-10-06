import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';

import type { LegalSectionConfig } from '@/entities/legal/model/commontypes';
import { LegalList } from '@/entities/legal/ui/LegalList/LegalList';
import { LegalSection } from '@/entities/legal/ui/LegalSection/LegalSection';
import { LegalTable } from '@/entities/legal/ui/LegalTable/LegalTable';
import clsx from 'clsx';

type Props = {
  sections: readonly LegalSectionConfig[];
};

export const LegalContent = ({ sections }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      {sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          {section.items && (
            <LegalList
              items={section.items}
              className={clsx(section.className)}
            />
          )}

          {section.table && <LegalTable {...section.table} />}

          {section.subsections?.map((subsection) => (
            <div key={subsection.title} className={''}>
              <Text as="h3" variant="h3">
                {t(subsection.title)}
              </Text>

              <LegalList
                items={subsection.items}
                className={clsx(subsection.className)}
              />
            </div>
          ))}
        </LegalSection>
      ))}
    </>
  );
};
