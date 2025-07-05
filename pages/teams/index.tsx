import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { TeamModal } from '@/components/modals/TeamModal';
import { useTeams } from '@/service/hooks/useTeam';
import { Team } from '@/service/types/team';
import { USERS_SUBROUTE } from '@/service/constants/routes';

const Page = () => {
  const router = useRouter();
  const { teams, isLoading } = useTeams();

  const [isTeamModalOpen, setIsTeamModalOpen] = useState(true);

  const handleTeamSelect = useCallback(
    (team: Team) => {
      if (team) {
        setIsTeamModalOpen(false);
        router.push(`${USERS_SUBROUTE + team.id}`);
      }
    },
    [router],
  );

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <TeamModal
          isOpen={isTeamModalOpen}
          setIsOpen={setIsTeamModalOpen}
          teams={teams}
          onSelect={handleTeamSelect}
          isLoading={isLoading}
        />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
