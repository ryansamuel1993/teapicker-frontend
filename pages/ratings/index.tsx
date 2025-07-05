'use client';

import { useState, useCallback, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { UserModal } from '@/components/modals/UserModal';
import { useTeams } from '@/service/hooks/useTeam';
import { LoadingSpinner } from '@/components/Spinner';
import { User } from '@/service/types/user';
import { HOME } from '@/service/constants/routes';

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const teamId = params?.teamId as string;

  const { getTeamById, isLoading } = useTeams();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!teamId) {
      setUsers([]);

      return;
    }

    const team = getTeamById(teamId);

    if (team) {
      setUsers(team.members ?? []);
      setIsUserModalOpen(true);
    }
  }, [teamId, getTeamById]);

  const handleUserSelect = useCallback(() => {
    router.push(HOME);
    setIsUserModalOpen(false);
  }, [router]);

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <UserModal
            isOpen={isUserModalOpen}
            setIsOpen={setIsUserModalOpen}
            users={users}
            onSelect={handleUserSelect}
          />
        )}
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
