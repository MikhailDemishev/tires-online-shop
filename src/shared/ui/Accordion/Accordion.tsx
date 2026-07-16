import * as RadixAccordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import s from './Accordion.module.scss';
import type { ReactNode } from 'react';

type AccordionItem = {
  value: string;
  header: ReactNode;
  children: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  triggerClassName?: string;
};

export const Accordion = ({
  items,
  type = 'single',
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
}: AccordionProps) => {
  return (
    <RadixAccordion.Root
      type={type}
      collapsible={type === 'single' ? true : undefined}
      className={className}
    >
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.value}
          value={item.value}
          className={itemClassName}
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className={triggerClassName}>
              {item.header}
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content
            className={clsx(s.accordionContent, contentClassName)}
          >
            {item.children}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};
