import { CreateUserInput, User } from './user';

export type Team = {
  id: string;
  name: string;
  members?: User[];
};

export type CreateTeamInput = {
  name: string;
  members?: Omit<CreateUserInput, 'teamId'>[];
};
