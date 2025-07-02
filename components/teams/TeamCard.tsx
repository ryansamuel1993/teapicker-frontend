import { Card } from 'flowbite-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { UserCard } from '../users/UserCard';
import { User } from '@/service/types/user';

type TeamCardProps = {
  name: string;
  members?: User[];
};

export const TeamCard = ({ name, members = [] }: TeamCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations('Team');

  return (
    <Card
      className="w-full transition-shadow cursor-pointer hover:shadow-lg"
      onClick={() => setExpanded((prev) => !prev)}
    >
      <h5 className="text-lg font-semibold tracking-tight">{name}</h5>

      {expanded &&
        (members.length > 0 ? (
          <div className="mt-3 space-y-2">
            {members.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">{t('noMembers')}</p>
        ))}
    </Card>
  );
};
