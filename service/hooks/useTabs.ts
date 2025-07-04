import { FC, SVGProps, useMemo } from 'react';
import { HiArchive, HiEye, HiStar, HiUser } from 'react-icons/hi';
import { TEAMS, RATINGS, ORDERS, PROFILE } from '@/service/constants/routes';
import { useCurrentUser } from '@/service/hooks/useCurrentUser';

type TabItem = {
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
          route: '/signup',
          icon: HiUser,
        },
      ];
    }

    return [
      { label: 'Profile', icon: HiUser, labelColor: 'dark', route: PROFILE },
      { label: 'Teams', icon: HiEye, labelColor: 'dark', route: TEAMS },
      { label: 'Ratings', icon: HiStar, route: RATINGS },
      { label: 'Orders', icon: HiArchive, route: ORDERS },
    ];
  }, [currentUser]);
};
