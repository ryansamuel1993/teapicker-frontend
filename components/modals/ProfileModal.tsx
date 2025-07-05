import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import { PreferencesCard } from '../PreferencesCard';
import { UserProfileCard } from '../users/UserCard';
import Modal from '@/components/Modal';
import type { User } from '@/service/types/user';

import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

type ProfileModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  user: User | undefined;
};

export const ProfileModal: FC<ProfileModalProps> = ({ isOpen, setIsOpen, user }) => {
  const isMobile = useIsMobileBreakpoint();
  const t = useTranslations('Profile');

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      withCloseButton={false}
      fullHeight={isMobile}
      bodyClassName="h-96"
      size="md"
    >
      {user ? (
        <div className="flex flex-col items-center gap-6 text-white">
          <UserProfileCard user={user} />

          {user.preferences ? (
            <PreferencesCard preferences={user.preferences} />
          ) : (
            <p className="text-sm italic text-gray-500">{t('noPreferences')}</p>
          )}
        </div>
      ) : (
        <p className="items-center justify-end text-sm text-center text-red-400">{t('userNotFound')}</p>
      )}
    </Modal>
  );
};
