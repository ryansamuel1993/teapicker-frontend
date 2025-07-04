import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { ProfileModal } from '@/components/modals/ProfileModal';
import { useUser } from '@/service/hooks/useUser';

const Page = () => {
  const params = useParams();
  const userId = params?.userId as string;

  const { fetchUserById, fetchedUserById } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    void fetchUserById(userId);
  }, [userId, fetchUserById]);

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <ProfileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} user={fetchedUserById} />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
