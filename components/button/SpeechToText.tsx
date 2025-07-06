import { Button, Textarea } from 'flowbite-react';
import { HiMicrophone, HiPause, HiRewind } from 'react-icons/hi';

interface SpeechToTextProps {
  transcript: string;
  listening: boolean;
  resetTranscript: () => void;
  toggleListening: () => void;
}

export const SpeechToText = ({ transcript, listening, resetTranscript, toggleListening }: SpeechToTextProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <Button
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

      <div className="flex flex-col items-center justify-start w-full h-full pt-5 space-y-6 rounded">
        <Textarea
          readOnly
          className="p-3 overflow-y-auto text-sm whitespace-pre-wrap rounded resize-none slim-scrollbar"
          value={transcript}
        />
        <Button onClick={resetTranscript} className="text-black border border-white rounded-2xl hover:bg-gray-400">
          <HiRewind className="text-4xl text-white animate-pulse" />
        </Button>
      </div>
    </div>
  );
};
