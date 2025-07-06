import { useTranslations } from 'next-intl';
import { useSpeechRecognition } from 'react-speech-recognition';
import SpeechRecognition from 'react-speech-recognition';
import { HiSave } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import { SpeechToText } from '../button/SpeechToText';
import Modal from '@/components/Modal';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

type RecordingModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRecording: (note: string) => void;
};

export const RecordingModal = ({ isOpen, setIsOpen }: RecordingModalProps) => {
  const isMobile = useIsMobileBreakpoint();
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const t = useTranslations('Recording');

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
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
      fullHeight={isMobile}
      contentClassName="max-sm:flex max-sm:flex-col max-sm:justify-end md:h-3/5"
      actions={
        <Button className="flex items-center gap-2 mb-4 ml-auto border" onClick={() => setIsOpen(false)}>
          <HiSave className="text-lg" />
          Save
        </Button>
      }
    >
      {browserSupportsSpeechRecognition && (
        <SpeechToText
          transcript={transcript}
          listening={listening}
          resetTranscript={resetTranscript}
          toggleListening={toggleListening}
        />
      )}
    </Modal>
  );
};
