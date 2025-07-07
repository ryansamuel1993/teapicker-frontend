import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import { PreferencesCard } from '../PreferencesCard';
import { UserProfileCard } from '../users/UserCard';
import { ErrorMessage } from '../Error';
import Modal from '@/components/Modal';
import type { User } from '@/service/types/user';

type ProfileModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  user: User | undefined;
};

export const ProfileModal: FC<ProfileModalProps> = ({ isOpen, setIsOpen, user }) => {
  const t = useTranslations('Profile');

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      withCloseButton={false}
      bodyClassName="h-96"
      size="md"
    >
      {user ? (
        <div className="flex flex-col items-center gap-6 text-white">
          <UserProfileCard user={user} />

          {user.preferences ? (
            <PreferencesCard preferences={user.preferences} />
          ) : (
            <ErrorMessage className="text-sm italic text-gray-500 bg-transparent border-none">
              {t('noPreferences')}
            </ErrorMessage>
          )}
        </div>
      ) : (
        <ErrorMessage>{t('userNotFound')}</ErrorMessage>
      )}
    </Modal>
  );
};
