import { Card } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { User } from '@/service/types/user';

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  const t = useTranslations('User');

  return (
    <Card className="w-full">
      <h5 className="font-semibold tracking-tight text-gray-900 text-md">{user.name}</h5>

      {user.email && (
        <p className="text-sm text-gray-600">
          {t('email')}: <span className="text-gray-800">{user.email}</span>
        </p>
      )}

      {user.contactNumber && (
        <p className="text-sm text-gray-600">
          {t('contact')}: <span className="text-gray-800">{user.contactNumber}</span>
        </p>
      )}
    </Card>
  );
};
