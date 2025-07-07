import { Button } from 'flowbite-react';
import { LoadingSpinner } from '../Spinner';
import { ErrorMessage } from '../Error';
import Modal from '@/components/Modal';
import { Team } from '@/service/types/team';

type TeamModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  teams: Team[];
  isLoading: boolean;
  onSelect: (team: Team) => void;
};

export const TeamModal = ({ isOpen, setIsOpen, teams, onSelect, isLoading }: TeamModalProps) => {
  const handleSelect = (team: Team) => {
    onSelect(team);
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton={false}
      contentClassName="md:h-1/2"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Team"
      size="md"
    >
      {isLoading && <LoadingSpinner />}

      {!isLoading && teams.length === 0 && <ErrorMessage>No teams available.</ErrorMessage>}

      {!isLoading && teams.length > 0 && (
        <div className="flex flex-col gap-2">
          {teams.map((team) => (
            <Button
              key={team.id}
              className="justify-center w-full bg-gray-800 border border-transparent"
              onClick={() => handleSelect(team)}
            >
              {team.name}
            </Button>
          ))}
        </div>
      )}
    </Modal>
  );
};
