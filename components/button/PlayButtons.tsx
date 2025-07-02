import { Button } from 'flowbite-react';
import { PlayIcon } from '@heroicons/react/24/solid';

type PlayButtonProps = {
  setIsOpen: (value: boolean) => void;
};

export const PlayButton = ({ setIsOpen }: PlayButtonProps) => {
  return (
    <Button
      color="gray"
      onClick={() => setIsOpen(true)}
      className="flex items-center gap-2 px-6 py-3 text-white bg-teal-600 rounded-full shadow-lg hover:bg-teal-700"
    >
      <PlayIcon className="w-6 h-6" />
      Play
    </Button>
  );
};
