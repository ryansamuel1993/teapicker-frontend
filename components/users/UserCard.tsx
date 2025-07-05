import { FC } from 'react';
import { Card } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { UserAvatar } from '@/components/users/UserAvatar';
import { User } from '@/service/types/user';

type UserProfileCardProps = {
  user: User;
};

export const UserProfileCard: FC<UserProfileCardProps> = ({ user }) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-sm mx-auto text-center">
      <div className="flex flex-col items-center space-y-2">
        <UserAvatar user={user} />

        <div className="w-full pt-2 space-y-1 border-t border-gray-200 dark:border-gray-600">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">@ {user.email ?? t('noEmail')}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">📞 {user.contactNumber ?? t('noContact')}</p>
          <p className="text-sm text-yellow-500">★ {user.averageRating ?? t('noRating')}</p>
        </div>
      </div>
    </Card>
  );
};
