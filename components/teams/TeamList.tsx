import { TeamCard } from './TeamCard';
import { Team } from '@/service/types/team';

type TeamsListProps = {
  teams: Team[];
};

export const TeamList = ({ teams }: TeamsListProps) => (
  <div className="grid w-full max-w-3xl gap-4">
    {teams.map((team) => (
      <TeamCard key={team.id} name={team.name} members={team.members} />
    ))}
  </div>
);
