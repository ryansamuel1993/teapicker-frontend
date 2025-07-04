import { Team as GqlTeam } from '../../gql/index.gql';
import { Team } from '../../types/team';
import { mapUser } from './user';

export const mapTeam = (team: GqlTeam): Team => ({
  id: team.id,
  name: team.name,
  members: team.members?.map((u) => mapUser(u)) ?? [],
});
