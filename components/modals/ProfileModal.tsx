import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import { UserAvatar } from '../users/UserAvatar';
import Modal from '@/components/Modal';
import type { User } from '@/service/types/user';
import { useCurrentUser } from '@/service/hooks/useCurrentUser';

type ProfileModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  user: User | undefined;
};

export const ProfileModal: FC<ProfileModalProps> = ({ isOpen, setIsOpen, user }) => {
  const t = useTranslations('Profile');
  const currentUser = useCurrentUser();

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      withCloseButton={false}
      bgTransparent={false}
      contentClassName="h-3/4 md:h-96"
      size="md"
    >
      {user ? (
        <>
          <div className="flex flex-col items-center gap-4 text-white">
            <UserAvatar user={user} hideAvailableChip={currentUser?.id === user.id} />
            <div className="space-y-1 text-center">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-gray-300">{user.email ?? t('noEmail')}</p>
              <p className="text-sm text-gray-400">📞 {user.contactNumber ?? t('noContact')}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="items-center justify-end text-sm text-center text-red-400">User not found.</p>
      )}
    </Modal>
  );
};
