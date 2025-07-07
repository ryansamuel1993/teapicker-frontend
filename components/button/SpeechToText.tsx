import { FC, useEffect, useState } from 'react';
import { Button, Textarea } from 'flowbite-react';
import { HiMicrophone, HiPause, HiRewind } from 'react-icons/hi';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ErrorMessage } from '../Error';

interface SpeechToTextProps {
  setRecording: (transcript: string) => void;
}

export const SpeechToText: FC<SpeechToTextProps> = ({ setRecording }) => {
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

  const handleReset = () => {
    resetTranscript();
    setRecording('');
  };

  useEffect(() => {
    setRecording(transcript);
  }, [transcript, setRecording]);

  if (!browserSupportsSpeechRecognition) {
    return <ErrorMessage>Your browser does not support speech recognition.</ErrorMessage>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 space-y-6">
      <Button
        onClick={toggleListening}
        className={`flex items-center justify-center rounded-full py-8 w-24 h-24 shadow-lg transition-colors duration-200 ${
          listening ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
        aria-label={listening ? 'Stop recording' : 'Start recording'}
      >
        {listening ? (
          <HiPause className="text-4xl text-white animate-pulse" />
        ) : (
          <HiMicrophone className="text-4xl text-white" />
        )}
      </Button>

      {hasStarted && (
        <div className="flex flex-col items-center justify-start w-full h-full pt-5 space-y-6 rounded">
          <Textarea
            readOnly
            value={transcript}
            placeholder="Your speech will appear here..."
            className="w-full h-40 p-3 text-sm whitespace-pre-wrap bg-gray-100 rounded resize-none slim-scrollbar"
          />

          <Button
            onClick={handleReset}
            className="flex items-center gap-2 text-white border border-white rounded-2xl hover:bg-gray-400"
          >
            <HiRewind className="text-xl text-white animate-pulse" />
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};
