import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { LoginModal } from '@/components/modals/LoginModal';
import { CurrentUserContext } from '@/service/context/CurrentUserProvider';
import { useUser } from '@/service/hooks/useUser';
import { HOME } from '@/service/constants/routes';

const Page = () => {
  const router = useRouter();
  const { login, user, isLoading, error } = useUser();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [authError, setAuthError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (currentUser) {
      router.push(HOME);

      return;
    }
  }, [currentUser, router]);

  const handleLogin = async (email: string) => {
    void login(email);

    if (user) {
      setCurrentUser(user);
      setIsLoginModalOpen(false);
      router.push(HOME);
    }

    setAuthError(error);
  };

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <LoginModal
          isOpen={isLoginModalOpen}
          setIsOpen={setIsLoginModalOpen}
          onLogin={handleLogin}
          error={authError}
          isLoading={isLoading}
        />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
