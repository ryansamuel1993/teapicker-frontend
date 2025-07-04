import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { PlayButton } from '@/components/button/PlayButtons';
import { TeamModal } from '@/components/modals/TeamModal';
import { useTeams } from '@/service/hooks/useTeam';
import { Team } from '@/service/types/team';

const Page = () => {
  const { teams, isLoading } = useTeams();
  const router = useRouter();

  const [isTeamModalOpen, setIsTeamModalOpen] = useState(true);

  const handleTeamSelect = useCallback(
    (selectedTeam: Team) => {
      if (selectedTeam) {
        setIsTeamModalOpen(false);
        router.push(`/users/${selectedTeam.id}`);
      }
    },
    [router],
  );

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <PlayButton setIsOpen={setIsTeamModalOpen} />

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
