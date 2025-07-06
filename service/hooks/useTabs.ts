import { FC, SVGProps, useMemo } from 'react';
import { HiArchive, HiCake, HiEye, HiLogin, HiLogout, HiStar, HiUser } from 'react-icons/hi';
import { TEAMS, RATINGS, ORDERS, PROFILE, SIGNUP, SIGNOUT, LOGIN, PREFERENCES } from '@/service/constants/routes';
import { useCurrentUser } from '@/service/hooks/useCurrentUser';

export type TabItem = {
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  route: string;
  labelColor?: string;
};

export const useTabs = (): TabItem[] => {
  const currentUser = useCurrentUser();

  return useMemo(() => {
    if (!currentUser) {
      return [
        {
          label: 'Sign Up',
          route: SIGNUP,
          icon: HiUser,
        },
        {
          label: 'Log in',
          route: LOGIN,
          icon: HiLogin,
        },
      ];
    }

    return [
      { label: 'Sign out', icon: HiLogout, labelColor: 'dark', route: SIGNOUT },
      { label: 'Profile', icon: HiUser, labelColor: 'dark', route: PROFILE },
      { label: 'Teams', icon: HiEye, labelColor: 'dark', route: TEAMS },
      { label: 'Preferences', icon: HiCake, labelColor: 'dark', route: PREFERENCES },
      { label: 'Ratings', icon: HiStar, route: RATINGS },
      { label: 'Orders', icon: HiArchive, route: ORDERS },
    ];
  }, [currentUser]);
};
