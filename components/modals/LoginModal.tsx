import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { LoadingSpinner } from '../Spinner';
import ErrorMessage from '../Error';
import Modal from '@/components/Modal';
import { validateEmail } from '@/service/utils/validators';

type LoginModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onLogin: (email: string) => void;
  isLoading: boolean;
  error?: string;
};

export const LoginModal = ({ isOpen, setIsOpen, onLogin, isLoading, error }: LoginModalProps) => {
  const t = useTranslations('Login');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError(t('validation.emailInvalid'));

      return;
    }

    setEmailError(undefined);
    onLogin(email);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      size="md"
      noBodyPadding
      contentClassName="max-sm:flex max-sm:flex-col max-sm:justify-end"
      footerClassName="flex items-end justify-end"
      actions={isLoading ? <LoadingSpinner /> : <Button onClick={handleSubmit}>{t('login')}</Button>}
    >
      <div>
        <Label htmlFor="email" />
        <TextInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(undefined);
          }}
          placeholder={t('emailPlaceholder')}
          color={emailError ? 'failure' : undefined}
          required
        />
        {emailError && <span className="text-sm text-red-600">{emailError}</span>}
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Modal>
  );
};
