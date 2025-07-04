import { createContext, useState, useMemo, ReactNode, useCallback } from 'react';
import { User } from '../types/user';

export interface ICurrentUserContext {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  removeCurrentUser: () => void;
}

type CurrentUserProviderProps = {
  initialUser?: User | null;
  children: ReactNode;
};

export const CurrentUserContext = createContext<ICurrentUserContext>({
  currentUser: null,
  setCurrentUser: () => {},
  removeCurrentUser: () => {},
});

const STORAGE_KEY = 'currentUser';

export const CurrentUserProvider = ({ children, initialUser = null }: CurrentUserProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      return stored ? JSON.parse(stored) : initialUser;
    } catch {
      return initialUser;
    }
  });

  const setCurrentUser = useCallback((newUser: User) => {
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  }, []);

  const removeCurrentUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentUser: user,
      setCurrentUser,
      removeCurrentUser,
    }),
    [user, setCurrentUser, removeCurrentUser],
  );

  return <CurrentUserContext.Provider value={contextValue}>{children}</CurrentUserContext.Provider>;
};
