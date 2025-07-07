import { Button } from 'flowbite-react';
import { useEffect, useMemo } from 'react';
import Modal from '../Modal';
import { PlayGrid } from '../PlayGrid';
import { PlayEntryInput } from '@/service/types/play';
import { Team } from '@/service/types/team';

type PlayModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  onSubmit: () => void;
  playMatch: (input: PlayEntryInput) => Promise<string | undefined>;
  team: Team;
  loser: string | undefined;
  isPlaying: boolean;
};

export const PlayModal = ({ isOpen, setIsOpen, team, loser, playMatch, onSubmit, isPlaying }: PlayModalProps) => {
  const { members } = team;

  const play: PlayEntryInput = useMemo(
    () => ({
      players: members ?? [],
    }),
    [members],
  );

  useEffect(() => {
    if (loser) {
      return;
    }

    void playMatch(play);
  }, [loser, play, playMatch]);

  return (
    <Modal
      withCloseButton
      showBackButton={false}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Play"
      contentClassName="p-2 sm:h-full md:h-4/5"
      size="xl"
      actions={
        !isPlaying && (
          <Button className="ml-auto border" onClick={onSubmit}>
            Submit
          </Button>
        )
      }
    >
      <PlayGrid play={play} loser={loser} />
    </Modal>
  );
};
