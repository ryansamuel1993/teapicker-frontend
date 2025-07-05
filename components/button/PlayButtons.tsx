import { Button } from 'flowbite-react';
import { PlayIcon } from '@heroicons/react/24/solid';

type PlayButtonProps = {
  onClick: () => void;
};

export const PlayButton = ({ onClick }: PlayButtonProps) => {
  return (
    <Button
      color="gray"
      onClick={onClick}
      className="flex items-center justify-center w-20 h-20 p-0 text-white transition-all bg-teal-600 rounded-full shadow-xl md:w-32 md:!h-32 md hover:bg-teal-700 focus:ring-4 focus:ring-teal-400"
    >
      <PlayIcon className="w-12 h-12 pl-2 md:w-28 md:h-28" />
    </Button>
  );
};
