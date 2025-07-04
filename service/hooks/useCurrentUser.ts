import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserProvider';
import { User } from '../types/user';

export const useCurrentUser = (): User | null => {
  return useContext(CurrentUserContext).currentUser;
};
