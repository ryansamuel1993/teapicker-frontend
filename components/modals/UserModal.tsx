import { useState } from 'react';
import { Button } from 'flowbite-react';
import classNames from 'classnames';
import Modal from '@/components/Modal';
import { User } from '@/service/types/user';

type UserModalProps = {
  isOpen: boolean;
  onIsOpenChange: (state: boolean) => void;
  users: User[];
  selectedUserId?: string;
  onSelect: (UserId: string) => void;
};

export const UserModal = ({ isOpen, onIsOpenChange, users, selectedUserId, onSelect }: UserModalProps) => {
  const [hoveredUserId, setHoveredUserId] = useState<string | null>(null);

  const handleSelect = (userId: string) => {
    onSelect(userId);
    onIsOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onIsOpenChange={onIsOpenChange} title="Select a User" size="md" bodyClassName="space-y-3">
      <div className="flex flex-col gap-2">
        {users.map((user) => (
          <Button
            key={user.id}
            color={selectedUserId === user.id ? 'dark' : 'gray'}
            className={classNames('w-full justify-start text-left hover:bg-gray-800 transition-all', {
              'bg-gray-800 text-white': selectedUserId === user.id,
              'border border-white/20': hoveredUserId === user.id,
            })}
            onMouseEnter={() => setHoveredUserId(user.id)}
            onMouseLeave={() => setHoveredUserId(null)}
            onClick={() => handleSelect(user.id)}
          >
            {user.name}
          </Button>
        ))}
      </div>
    </Modal>
  );
};
