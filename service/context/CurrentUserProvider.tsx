'use client';

import { useMemo, useCallback, ReactNode, useState, createContext } from 'react';
import { User } from '../types/user';

export interface ICurrentUserContext {
  currentUser: User | null;
  setCurrentUser: (authToken: string) => void;
  removeCurrentUser: () => void;
}

type CurrentUserProviderProps = {
  initialUser: User | null;
  children: ReactNode;
};

export const CurrentUserContext = createContext<ICurrentUserContext>({
  currentUser: null,
  setCurrentUser: () => {},
  removeCurrentUser: () => {},
});

export const CurrentUserProvider = ({ children, initialUser }: CurrentUserProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const setCurrentUser = useCallback(() => {
    setUser(user);
  }, [user]);

  const removeCurrentUser = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const ctx = useMemo(
    (): ICurrentUserContext => ({
      currentUser: user,
      setCurrentUser,
      removeCurrentUser,
    }),
    [user, setCurrentUser, removeCurrentUser],
  );

  return <CurrentUserContext.Provider value={ctx}>{children}</CurrentUserContext.Provider>;
};
