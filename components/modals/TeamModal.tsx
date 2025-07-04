import { Button } from 'flowbite-react';
import classNames from 'classnames';
import { LoadingSpinner } from '../Spinner';
import Modal from '@/components/Modal';
import { Team } from '@/service/types/team';

type TeamModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  teams: Team[];
  selectedTeam?: Team;
  isLoading: boolean;
  onSelect: (team: Team) => void;
};

export const TeamModal = ({ isOpen, setIsOpen, teams, selectedTeam, onSelect, isLoading }: TeamModalProps) => {
  const handleSelect = (team: Team) => {
    onSelect(team);
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton={false}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Select a Team"
      size="md"
      bodyClassName="space-y-3"
    >
      {isLoading && <LoadingSpinner />}
      <div className="flex flex-col gap-2">
        {teams.map((team) => (
          <Button
            key={team.id}
            color={selectedTeam === team ? 'dark' : 'gray'}
            className={classNames(
              'w-full justify-start text-left transition-all hover:bg-gray-800 border border-transparent',
              {
                'bg-gray-800 text-white border-white/20': selectedTeam === team,
              },
            )}
            onClick={() => handleSelect(team)}
          >
            {team.name}
          </Button>
        ))}
      </div>
    </Modal>
  );
};
