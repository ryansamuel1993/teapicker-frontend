import { LoadingSpinner } from '../Spinner';
import { PreferenceItems } from './preferences.tsx/PreferenceItem';
import Modal from '@/components/Modal';
import { Preferences } from '@/service/types/preferences';

type PreferencesModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  preferences: Preferences;
};

export const PreferencesModal = ({ isOpen, setIsOpen, preferences }: PreferencesModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Preferences" size="md" bodyClassName="space-y-3">
      <PreferenceItems preference={preferences} />
    </Modal>
  );
};
