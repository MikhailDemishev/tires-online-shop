import { type ComponentRef, forwardRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';

import { CloseIcon } from '@/assets/icons';
import { Button } from '@/shared/ui/Button';

import s from './Modal.module.scss';

interface IAddModalData extends DialogPrimitive.DialogContentProps {
  onCloseModal?: () => void;
}

export const ModalContent = forwardRef<
  ComponentRef<typeof DialogPrimitive.Content>,
  IAddModalData
>(({ children, className, onCloseModal, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={s.overlay} />
    <DialogPrimitive.Content
      className={clsx(s.content, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      {onCloseModal && (
        <DialogPrimitive.Close asChild>
          <Button variant="unset" className={s.closeBtn} onClick={onCloseModal}>
            <CloseIcon className={s.icon} />
          </Button>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
