import { User } from '../types/user';
import { User as GqlUser } from '@/src/gql/generated';

export const mapUsers = (user: GqlUser): User => ({
  id: user.id,
  name: user.name,
  email: user.email ?? undefined,
  contactNumber: user.contactNumber ? user.contactNumber : undefined,
  teamId: user.teamId ?? undefined,
});
