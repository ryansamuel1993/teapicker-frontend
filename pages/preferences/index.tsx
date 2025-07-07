import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { PreferencesModal } from '@/components/modals/PreferencesModal';
import { usePreferences } from '@/service/hooks/usePreferences';
import { HOME } from '@/service/constants/routes';

const Page = () => {
  const router = useRouter();
  const { userPreferences, setPreferences, savePreferences } = usePreferences();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSave = async () => {
    await savePreferences();
    setIsModalOpen(false);
    router.push(HOME);
  };

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <PreferencesModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          preferences={userPreferences}
          setPreferences={setPreferences}
          onSave={handleSave}
        />
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
