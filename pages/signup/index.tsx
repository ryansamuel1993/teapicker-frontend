import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { SignUpModal } from '@/components/modals/SignUpModal';
import { CreateUserInput } from '@/service/types/user';
import { CurrentUserContext } from '@/service/context/CurrentUserProvider';
import { useUser } from '@/service/hooks/useUser';
import { HOME } from '@/service/constants/routes';

const Page = () => {
  const router = useRouter();
  const { createUser, isLoading, error } = useUser();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(true);
  const [authError, setAuthError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (currentUser) {
      router.push(HOME);

      return;
    }
  }, [currentUser, router]);

  const handleUserSave = async (user: CreateUserInput) => {
    const created = await createUser(user);

    if (created) {
      setCurrentUser(created);
      setIsSignUpModalOpen(false);
      router.push(HOME);
    }

    setAuthError(error);
  };

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <SignUpModal
          isOpen={isSignUpModalOpen}
          setIsOpen={setIsSignUpModalOpen}
          onSave={handleUserSave}
          error={authError}
          isLoading={isLoading}
        />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
