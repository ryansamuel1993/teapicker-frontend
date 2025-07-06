import { FC, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { HiMicrophone, HiPause, HiRewind } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useTranslations } from 'next-intl';

export const SpeechToText: FC = () => {
  const t = useTranslations('Speech');
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const [hasStarted, setHasStarted] = useState(false);

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
      setHasStarted(true);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <p className="text-center text-red-500">{t('unsupported')}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl p-6 mx-auto space-y-6 bg-white rounded shadow">
      <Button
        aria-label={listening ? t('stop') : t('start')}
        onClick={toggleListening}
        className={`flex items-center justify-center rounded-full py-8 w-24 h-24 shadow-lg transition-colors duration-200 ${
          listening ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {listening ? (
          <HiPause className="text-4xl text-white animate-pulse" />
        ) : (
          <HiMicrophone className="text-4xl text-white" />
        )}
      </Button>

      {hasStarted && (
        <div className="w-full space-y-4">
          <TextareaAutosize
            value={transcript}
            readOnly
            minRows={3}
            maxRows={40}
            className="w-full p-3 text-sm whitespace-pre-wrap bg-gray-100 rounded resize-none slim-scrollbar"
            placeholder={t('transcriptPlaceholder')}
          />

          <div className="pt-2">
            <Button
              onClick={resetTranscript}
              className="flex items-center justify-center w-full gap-2 text-black border border-white rounded-2xl hover:bg-gray-400"
            >
              <HiRewind className="text-xl text-white animate-pulse" />
              {t('reset')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
