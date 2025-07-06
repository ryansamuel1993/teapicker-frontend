import { PreferenceItems } from '../preferences.tsx/PreferenceItem';
import Modal from '@/components/Modal';
import { Preferences } from '@/service/types/preferences';

type PreferencesModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  preferences: Preferences | undefined;
};

export const PreferencesModal = ({ isOpen, setIsOpen, preferences }: PreferencesModalProps) => {
  const hasPreferences = preferences && Object.keys(preferences).length > 0;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Preferences" size="md" >
      {hasPreferences ? (
        <PreferenceItems preference={preferences} />
      ) : (
        <p className="text-sm text-center text-gray-400">No preferences available.</p>
      )}
    </Modal>
  );
};
