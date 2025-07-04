import { useContext, useState } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { SignUpModal } from '@/components/modals/SignUpModal';
import { TeamModal } from '@/components/modals/TeamModal';
import { CreateUserInput } from '@/service/types/user';
import { CurrentUserContext } from '@/service/context/CurrentUserProvider';
import { useTeams } from '@/service/hooks/useTeam';
import { useUser } from '@/service/hooks/useUser';

const Page = () => {
  const { teams } = useTeams();
  const { createUser, updateUser, isLoading, error } = useUser();
  const { setCurrentUser, currentUser } = useContext(CurrentUserContext);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(true);
  const [isTeamUpModalOpen, setIsTeamUpModalOpen] = useState(false);
  const [authError, setAuthError] = useState<string | undefined>(undefined);

  const handleUserSave = async (user: CreateUserInput) => {
    const created = await createUser(user);

    if (created) {
      setCurrentUser(created);
      setIsTeamUpModalOpen(true);
      setIsSignUpModalOpen(false);
    }

    setAuthError(error);
  };

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        {!currentUser ? (
          <SignUpModal
            isOpen={isSignUpModalOpen}
            setIsOpen={setIsSignUpModalOpen}
            onSave={handleUserSave}
            error={authError}
            isLoading={isLoading}
          />
        ) : (
          <TeamModal
            isOpen={isTeamUpModalOpen}
            isLoading={isLoading}
            setIsOpen={setIsTeamUpModalOpen}
            teams={teams}
            onSelect={(team) => {
              updateUser({
                ...currentUser,
                teamId: team.id,
              });
            }}
          />
        )}
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
