import { User } from './user';
import { CreateUserInput } from '@/src/gql/generated';

export type Team = {
  id: string;
  name: string;
  members: User[];
};

type CreateTeamUserInput = Omit<CreateUserInput, 'teamId'>;
export type CreateTeamInput = {
  name: string;
  user?: CreateTeamUserInput[];
};
