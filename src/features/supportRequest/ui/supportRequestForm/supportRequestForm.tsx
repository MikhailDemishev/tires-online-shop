import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SupportRequestFormType } from '@/features/supportRequest/model/types/supportRequestTypes';
import { supportRequestSchema } from '@/features/supportRequest/model/schemas/supportRequestSchema';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';
import s from './supportRequestForm.module.scss';
import { SUPPORT_REQUEST_FIELDS } from '../../config/supportRequestFields';
import { InputController } from '@/shared/ui/Input';
import { CheckboxController } from '@/shared/ui/Checkbox/CheckboxController';
import { Button } from '@/shared/ui/Button';

type SupportRequestFormProps = {
  closeModal?: () => void;
  onSuccess?: () => void;
};

export const SupportRequestForm = ({ onSuccess }: SupportRequestFormProps) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SupportRequestFormType>({
    shouldUnregister: true,
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      customerName: '',
      email: '',
      phone: '',
      privacyConsent: false,
      comment: '',
    },
    resolver: zodResolver(supportRequestSchema),
  });

  const onSubmit = (data: SupportRequestFormType) => {
    console.log('data', data);
    onSuccess?.();
  };

  return (
    <form className={s.sForm} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Text as={'h2'} variant="h2">
        {t('supportRequest.title')}
      </Text>
      <Text variant="bodySmall" className={s.sFormSubtitle}>
        {t('supportRequest.subtitle')}
      </Text>
      <div className={s.sFormFields}>
        {SUPPORT_REQUEST_FIELDS.flatMap((item) =>
          item.fields.map((field) => (
            <InputController
              key={field.value}
              name={field.value}
              placeholderName={t(field.label)}
              id={field.value}
              type={field.type}
              inputWrapperClassName={s.sFormInputWrapper}
              inputClassName={s.sFormInput}
              control={control}
              required={field.required}
            />
          )),
        )}

        <CheckboxController
          control={control}
          name="privacyConsent"
          label={t('supportRequest.privacyConsent')}
          wrapperClassName={s.sFormCheckboxWrapper}
        />
      </div>
      <Button type="submit" disabled={!isValid} className={s.sFormBtn}>
        {t('supportRequest.submit')}
      </Button>
    </form>
  );
};
