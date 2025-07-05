import { Button } from 'flowbite-react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Modal from '@/components/Modal';
import { User } from '@/service/types/user';

type UserModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  users: User[] | undefined;
  onSelect: (user: User) => void;
};

export const UserModal = ({ isOpen, setIsOpen, users, onSelect }: UserModalProps) => {
  const handleSelect = (user: User) => {
    onSelect(user);
    setIsOpen(false);
  };

  const t = useTranslations('UserModal');

  return (
    <Modal
      withCloseButton={false}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      fullHeight
      contentClassName="p-2"
      size="xl"
    >
      <div className="flex flex-col gap-2 text-center">
        {users && users.length > 0 ? (
          users.map((user) => (
            <Button
              key={user.id}
              color="gray"
              className={classNames(
                'w-full justify-start transition-all border border-transparent hover:bg-gray-800 hover:text-white',
              )}
              onClick={() => handleSelect(user)}
            >
              {user.name}
            </Button>
          ))
        ) : (
          <p className="text-sm italic text-gray-400">No users available.</p>
        )}
      </div>
    </Modal>
  );
};
