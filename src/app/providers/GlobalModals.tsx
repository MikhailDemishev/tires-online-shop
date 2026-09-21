import { useAppDispatch, useAppSelector } from '@/app/store/';

import { closeModal, selectIsOpen, selectModalType } from '@/app/store/slices';
import { AuthModal } from '@/features/auth/ui/AuthModal';
import { SupportRequestModal } from '@/features/supportRequest/ui/supportRequestModal/SupportRequestModal';

export const GlobalModals = () => {
  const isOpen = useAppSelector(selectIsOpen);
  const type = useAppSelector(selectModalType);
  const dispatch = useAppDispatch();

  switch (type) {
    case 'Auth':
      return (
        <AuthModal open={isOpen} onOpenChange={() => dispatch(closeModal())} />
      );
    case 'SupportRequest':
      return (
        <SupportRequestModal
          open={isOpen}
          onOpenChange={() => dispatch(closeModal())}
        />
      );

    // case 'OrderCreated':
    //   return (
    //     <OrderCreatedModal
    //       open={isOpen}
    //       onOpenChange={() => dispatch(closeModal())}
    //     />
    //   );

    default:
      return null;
  }
};
