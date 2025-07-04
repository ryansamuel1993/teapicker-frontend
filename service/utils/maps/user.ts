import { User as GqlUser } from '../../gql/index.gql';
import { User } from '../../types/user';

export const mapUser = (user: GqlUser): User => ({
  id: user.id,
  name: user.name,
  email: user.email ?? undefined,
  contactNumber: user.contactNumber,
  teamId: user.teamId ?? undefined,
  media: user.media,
  isAvailable: Math.random() < 0.5,
});
