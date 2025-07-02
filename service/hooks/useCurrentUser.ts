import { useContext } from 'react';
import { User } from '../types/user';
import { CurrentUserContext } from '../context/CurrentUserProvider';

export const useCurrentUser = (): User | null => {
  return useContext(CurrentUserContext).currentUser;
};
