'use client';

import { useState } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { PlayButton } from '@/components/button/PlayButtons';
import { TeamModal } from '@/components/modals/TeamModal';
import { UserModal } from '@/components/modals/UserModal';
import { useTeams } from '@/service/hooks/useTeams';
import { User } from '@/service/types/user';

const Page = () => {
  const { teams } = useTeams();

  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(undefined);

  const handleTeamSelect = (teamId: string) => {
    const selectedTeam = teams.find((team) => team.id === teamId);

    if (selectedTeam) {
      setSelectedUsers(selectedTeam.members || []);
      setIsTeamModalOpen(false);
      setIsUserModalOpen(true);
    }
  };

  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <PlayButton setIsOpen={setIsTeamModalOpen} />

        <TeamModal
          isOpen={isTeamModalOpen}
          onIsOpenChange={setIsTeamModalOpen}
          teams={teams}
          onSelect={handleTeamSelect}
        />

        <UserModal
          isOpen={isUserModalOpen}
          onIsOpenChange={setIsUserModalOpen}
          users={selectedUsers}
          onSelect={handleUserSelect}
        />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
