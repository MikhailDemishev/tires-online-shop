import type { ComponentPropsWithoutRef } from 'react';
import { useTranslation } from '@/shared/lib/hooks';
import { Input } from './Input';
import s from './Input.module.scss';
import {
  useController,
  type Control,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';
import { Text } from '@/shared/ui/Text';

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'shouldUnregister' | 'rules' | 'control' | 'defaultValue'
> &
  Omit<
    ComponentPropsWithoutRef<'input'>,
    'onChange' | 'value' | 'onBlur' | 'onTouch'
  > & {
    control: Control<T>;
    placeholderName: string;
    errorMessage?: string;
    required?: boolean;
    inputWrapperClassName?: string;
    inputClassName?: string;
  };

export function InputController<T extends FieldValues>(props: Props<T>) {
  const {
    control,
    name,
    disabled,
    errorMessage,
    placeholderName,
    required,
    ...restProps
  } = props;
  const {
    field,
    fieldState: { error },
  } = useController({ control, name, disabled });
  const { t } = useTranslation();
  const message =
    errorMessage ?? (error?.message ? t(error.message) : undefined);

  return (
    <div className={props.inputWrapperClassName}>
      <div className={s.inputContainer}>
        <Input
          required={required}
          {...field}
          {...restProps}
          disabled={disabled}
          className={props.inputClassName}
          isError={Boolean(error)}
        />
        {!field.value && (
          <Text as={'span'} variant="bodySmall" className={s.placeholder}>
            {placeholderName}
            {required && <span className={s.required}>*</span>}
          </Text>
        )}
      </div>

      <span className={s.errorMessage}>{message ?? '\u00A0'}</span>
    </div>
  );
}
