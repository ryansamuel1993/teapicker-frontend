import { Button } from 'flowbite-react';
import classNames from 'classnames';
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

  return (
    <Modal
      withCloseButton={false}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Select a User"
      contentClassName="h-3/4 p-0"
      size="xl"
      bodyClassName="space-y-3"
    >
      <div className="flex flex-col gap-2">
        {users && users.length > 0 ? (
          users.map((user) => (
            <Button
              key={user.id}
              color="gray"
              className={classNames(
                'w-full justify-start text-left transition-all border border-transparent hover:bg-gray-800 hover:text-white',
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
