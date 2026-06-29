import clsx from 'clsx';
import s from './Tabs.module.scss';

type TabsItem<T extends string> = {
  value: T;
  label: string;
};

type TabsProps<T extends string> = {
  items: readonly TabsItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

export const Tabs = <T extends string>({
  items,
  value,
  onChange,
  className,
}: TabsProps<T>) => {
  return (
    <div className={clsx(s.tabs, className)}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className={clsx(s.tab, item.value === value && s.active)}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
