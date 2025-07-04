import { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { LoadingSpinner } from '../Spinner';
import ErrorMessage from '../Error';
import Modal from '@/components/Modal';
import { CreateUserInput } from '@/service/types/user';
import { validateContactNumber, validateEmail, validateName } from '@/service/utils/validators';

type SignUpModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSave: (user: CreateUserInput) => void;
  isLoading: boolean;
  error: string | undefined;
};

const defaultForm: CreateUserInput = {
  name: '',
  email: '',
  contactNumber: '',
};

export const SignUpModal = ({ isOpen, setIsOpen, onSave, error, isLoading }: SignUpModalProps) => {
  const t = useTranslations('Signup');

  const [form, setForm] = useState<CreateUserInput>(defaultForm);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof CreateUserInput, string>>>({});

  const handleChange = (field: keyof CreateUserInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleOnSave = async () => {
    const errors: Partial<typeof fieldErrors> = {};

    if (!validateName(form.name)) {
      errors.name = t('validation.nameRequired');
    }

    if (!validateEmail(form.email)) {
      errors.email = t('validation.emailInvalid');
    }

    if (!validateContactNumber(form.contactNumber)) {
      errors.contactNumber = t('validation.contactInvalid');
    }

    setFieldErrors(errors);

    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      return;
    }

    onSave(form);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      size="sm"
      footerClassName="flex items-end justify-end"
      actions={isLoading ? <LoadingSpinner /> : <Button onClick={handleOnSave}>{t('submit')}</Button>}
    >
      <div className="space-y-3">
        <div>
          <Label htmlFor="name" />
          <TextInput
            id="name"
            value={form.name}
            onChange={handleChange('name')}
            placeholder={t('namePlaceholder')}
            color={fieldErrors.name ? 'failure' : undefined}
            required
          />
          {fieldErrors.name && <span className="text-sm text-red-600">{fieldErrors.name}</span>}
        </div>

        <div>
          <Label htmlFor="email" />
          <TextInput
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder={t('emailPlaceholder')}
            color={fieldErrors.email ? 'failure' : undefined}
            required
          />
          {fieldErrors.email && <span className="text-sm text-red-600">{fieldErrors.email}</span>}
        </div>

        <div>
          <Label htmlFor="contactNumber" />
          <TextInput
            id="contactNumber"
            type="tel"
            value={form.contactNumber}
            onChange={handleChange('contactNumber')}
            placeholder={t('contactNumberPlaceholder')}
            color={fieldErrors.contactNumber ? 'failure' : undefined}
          />
          {fieldErrors.contactNumber && <span className="text-sm text-red-600">{fieldErrors.contactNumber}</span>}
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </Modal>
  );
};
