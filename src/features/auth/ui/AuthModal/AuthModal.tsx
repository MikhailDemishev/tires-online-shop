import s from './AuthModal.module.scss';
// import { useState } from 'react';
// import clsx from 'clsx';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Modal, ModalContent } from '@/shared/ui/Modal';
// import { Button } from '@/shared/ui/Button';

type AuthGuardModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AuthModal = ({ open, onOpenChange }: AuthGuardModalProps) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { t } = useTranslation();

  // const lastLocation = location.pathname + location.search + location.hash;
  // const [authMode, setAuthMode] = useState<'login' | 'signUp' | 'forgot'>(
  //   'login',
  // );

  const closeModal = () => {
    onOpenChange(false);
    // setAuthMode('login');
  };

  // const handleSuccessAuth = () => {
  //   closeModal();
  //   navigate(lastLocation || ROUTE.MY_PROFILE);
  // };

  // const handleForgotClick = () => {
  //   setAuthMode(authMode === "forgot" ? "login" : "forgot");
  // };
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className={s.modalAuthContent} onCloseModal={closeModal}>
        <VisuallyHidden>
          <DialogTitle>Authentication</DialogTitle>
        </VisuallyHidden>
        <div>модалка авторизации</div>
      </ModalContent>
    </Modal>
  );
};
