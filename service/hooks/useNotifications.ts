import { useState } from 'react';
import { Notification } from '../types/notifcations';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 'notif-1',
      title: 'New Message',
      message: 'You have a new message from Alex.',
      createdAt: new Date(Date.now() - 1000 * 60 * 5),
      isRead: false,
    },
    {
      id: 'notif-2',
      title: 'Team Update',
      message: 'Your team "Frontend Ninjas" was updated.',
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
      isRead: true,
    },
    {
      id: 'notif-3',
      title: 'Weekly Summary',
      message: 'Your weekly activity summary is now available.',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
      isRead: false,
    },
  ]);

  const handleNotification = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        isRead: true,
      })),
    );
  };

  return { notifications, handleNotification };
};
