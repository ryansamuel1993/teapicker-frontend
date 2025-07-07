import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SpeechToText } from '../button/SpeechToText';
import { SaveButton } from '../button/SaveButton';
import Modal from '@/components/Modal';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

type RecordingModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRecorded: (note: string) => void;
};

export const RecordingModal = ({ isOpen, setIsOpen, onRecorded }: RecordingModalProps) => {
  const isMobile = useIsMobileBreakpoint();
  const t = useTranslations('Recording');
  const [note, setNote] = useState('');

  const handleSave = () => {
    onRecorded(note);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={t('title')}
      size="md"
      noBodyPadding
      withCloseButton
      showBackButton
      contentClassName="max-sm:flex max-sm:flex-col max-sm:justify-end md:h-3/4"
      actions={<SaveButton onClick={handleSave} />}
    >
      <SpeechToText setRecording={setNote} />
    </Modal>
  );
};
