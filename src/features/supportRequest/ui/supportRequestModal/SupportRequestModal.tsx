import s from './SupportRequestModal.module.scss';
// import { useState } from 'react';
// import clsx from 'clsx';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Modal, ModalContent } from '@/shared/ui/Modal';
import { useTranslation } from '@/shared/lib/hooks';
import { SupportRequestForm } from '../supportRequestForm/supportRequestForm';
import { useState } from 'react';
import { Text } from '@/shared/ui/Text';
import { CircleCheck } from '@/assets/icons';

// import { Button } from '@/shared/ui/Button';

type SupportRequestModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const SupportRequestModal = ({
  open,
  onOpenChange,
}: SupportRequestModalProps) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);

  const closeModal = () => {
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent
        className={s.supportRequestContent}
        onCloseModal={closeModal}
        closeBtnClassName={s.supportRequestCloseBtn}
      >
        <VisuallyHidden>
          <DialogTitle>{t('supportRequest.title')}</DialogTitle>
        </VisuallyHidden>
        <div className={s.wrapper}>
          {isSuccess ? (
            <div className={s.success}>
              <Text as={'h2'} variant="h2" className={s.successTitle}>
                {t('supportRequest.successTitle')}
              </Text>
              <Text variant="bodySmall" className={s.successText}>
                {t('supportRequest.successText')}
              </Text>

              <span className={s.successIconWrapper}>
                <CircleCheck className={s.successIcon} />
              </span>
            </div>
          ) : (
            <SupportRequestForm
              closeModal={closeModal}
              onSuccess={() => setIsSuccess(true)}
            />
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};
