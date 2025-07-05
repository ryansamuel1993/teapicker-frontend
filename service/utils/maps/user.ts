import { User as GqlUser } from '../../gql/index.gql';
import { User } from '../../types/user';

export const mapUser = (user: GqlUser): User => ({
  id: user.id,
  name: user.name,
  email: user.email ?? '',
  contactNumber: user.contactNumber,
  teamId: user.teamId ?? undefined,
  media: user.media,
  preferences: user.preferences,
  averageRating: user.averageRating,
  isAvailable: Math.random() < 0.5,
});
