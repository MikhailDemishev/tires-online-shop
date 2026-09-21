import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController,
} from 'react-hook-form';

import { useTranslation } from '@/shared/lib/hooks';
import { Checkbox } from './Checkbox';

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'control' | 'rules' | 'defaultValue'
> & {
  control: Control<T>;
  label: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  showError?: boolean;
};

export const CheckboxController = <T extends FieldValues>({
  control,
  name,
  disabled,
  label,
  className,
  showError,
  labelClassName,
  wrapperClassName,
}: Props<T>) => {
  const { t } = useTranslation();

  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
    disabled,
  });

  return (
    <div className={wrapperClassName}>
      <Checkbox
        {...field}
        label={label}
        checked={Boolean(value)}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={className}
        labelClassName={labelClassName}
      />
      {showError && error?.message && <span>{t(error.message)}</span>}
    </div>
  );
};
