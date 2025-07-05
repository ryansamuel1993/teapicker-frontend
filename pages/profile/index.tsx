import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { ProfileModal } from '@/components/modals/ProfileModal';
import { useCurrentUser } from '@/service/hooks/useCurrentUser';
import { HOME } from '@/service/constants/routes';

const Page = () => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.push(HOME);
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <ProfileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} user={currentUser} />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
