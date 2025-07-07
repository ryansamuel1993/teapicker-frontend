import ErrorMessage from '../Error';
import { PreferencesCard } from '../PreferencesCard';
import { SaveButton } from '../button/SaveButton';
import Modal from '@/components/Modal';
import { Preferences, UpdatePreferencesInput } from '@/service/types/preferences';

type PreferencesModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  preferences: Preferences | undefined;
  setPreferences: (input: UpdatePreferencesInput) => void;
  onSave: () => Promise<void>;
};

export const PreferencesModal = ({ isOpen, setIsOpen, preferences, setPreferences, onSave }: PreferencesModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Preferences"
      size="md"
      contentClassName="md:h-3/5"
      actions={<SaveButton onClick={onSave} />}
    >
      {preferences ? (
        <PreferencesCard preferences={preferences} isEditable onChange={setPreferences} />
      ) : (
        <ErrorMessage>No preferences</ErrorMessage>
      )}
    </Modal>
  );
};
