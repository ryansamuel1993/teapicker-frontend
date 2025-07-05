'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { LoadingSpinner } from '@/components/Spinner';
import { PreferencesModal } from '@/components/modals/PreferencesModal';
import { useUser } from '@/service/hooks/useUser';

const Page = () => {
  const params = useParams();
  const userId = params?.userId as string;

  const { fetchedUserById, isLoading, fetchUserById } = useUser();
  const [isUserModalOpen, setIsPreferencesModalOpen] = useState(false);

  useEffect(() => {
    void fetchUserById(userId);
  }, [userId, fetchUserById]);

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <PreferencesModal
            isOpen={isUserModalOpen}
            setIsOpen={setIsPreferencesModalOpen}
            preferences={fetchedUserById?.preferences}
          />
        )}
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
