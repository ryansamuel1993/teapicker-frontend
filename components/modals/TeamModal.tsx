import { Button } from 'flowbite-react';
import { LoadingSpinner } from '../Spinner';
import Modal from '@/components/Modal';
import { Team } from '@/service/types/team';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

type TeamModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  teams: Team[];
  isLoading: boolean;
  onSelect: (team: Team) => void;
};

export const TeamModal = ({ isOpen, setIsOpen, teams, onSelect, isLoading }: TeamModalProps) => {
  const isMobile = useIsMobileBreakpoint();

  const handleSelect = (team: Team) => {
    onSelect(team);
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton={false}
      fullHeight={isMobile}
      contentClassName="p-2 md:h-3/4"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Team"
      size="md"
    >
      {isLoading && <LoadingSpinner />}

      {!isLoading && teams.length === 0 && <p className="text-sm text-center text-gray-400">No teams available.</p>}

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
