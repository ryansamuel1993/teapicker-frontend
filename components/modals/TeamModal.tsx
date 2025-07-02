import { useState } from 'react';
import { Button } from 'flowbite-react';
import classNames from 'classnames';
import Modal from '@/components/Modal';
import { Team } from '@/service/types/team';

type TeamModalProps = {
  isOpen: boolean;
  onIsOpenChange: (state: boolean) => void;
  teams: Team[];
  selectedTeamId?: string;
  onSelect: (teamId: string) => void;
};

export const TeamModal = ({ isOpen, onIsOpenChange, teams, selectedTeamId, onSelect }: TeamModalProps) => {
  const [hoveredTeamId, setHoveredTeamId] = useState<string | null>(null);

  const handleSelect = (teamId: string) => {
    onSelect(teamId);
    onIsOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onIsOpenChange={onIsOpenChange} title="Select a Team" size="md" bodyClassName="space-y-3">
      <div className="flex flex-col gap-2">
        {teams.map((team) => (
          <Button
            key={team.id}
            color={selectedTeamId === team.id ? 'dark' : 'gray'}
            className={classNames('w-full justify-start text-left hover:bg-gray-800 transition-all', {
              'bg-gray-800 text-white': selectedTeamId === team.id,
              'border border-white/20': hoveredTeamId === team.id,
            })}
            onMouseEnter={() => setHoveredTeamId(team.id)}
            onMouseLeave={() => setHoveredTeamId(null)}
            onClick={() => handleSelect(team.id)}
          >
            {team.name}
          </Button>
        ))}
      </div>
    </Modal>
  );
};
