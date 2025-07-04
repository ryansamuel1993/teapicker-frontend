import { BellIcon } from '@heroicons/react/24/solid';
import { Badge } from 'flowbite-react';
import { Notification } from '@/service/types/notifcations';

type NotificationProps = {
  notifications: Notification[];
  onClick?: () => void;
};

export const NotificationsButton = ({ notifications, onClick }: NotificationProps) => {
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <button
      onClick={onClick}
      className="relative p-1 rounded hover:bg-gray-800 focus:outline-none"
      aria-label="Notifications"
    >
      <BellIcon className="w-6 h-6 text-gray-300" />
      {unreadCount > 0 && (
        <Badge color="failure" size="xs" className="absolute top-0 right-0">
          {unreadCount}
        </Badge>
      )}
    </button>
  );
};
