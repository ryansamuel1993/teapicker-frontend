import { useEffect, useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import classNames from 'classnames';
import { TabItem, useTabs } from '@/service/hooks/useTabs';
import { CurrentUserContext } from '@/service/context/CurrentUserProvider';
import { SIGNUP, SIGNOUT } from '@/service/constants/routes';

export const BottomTabs = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const tabs = useTabs();
  const { removeCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = (tab: TabItem) => {
    if (tab.route === SIGNOUT) {
      removeCurrentUser();
      localStorage.removeItem('authToken');
      router.push(SIGNUP);
    } else {
      router.push(tab.route);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow h-14">
      <ul className="flex items-center justify-around h-full text-sm font-medium text-gray-700">
        {tabs.map((tab) => {
          const isActive = pathname === tab.route;
          const Icon = tab.icon;

          return (
            <li key={tab.route}>
              <button onClick={() => handleClick(tab)} className="relative flex flex-col items-center justify-center">
                <Icon
                  className={classNames('h-5 w-5', {
                    'text-blue-600': isActive,
                    'text-gray-400': !isActive,
                  })}
                />
                <span
                  className={classNames('text-xs mt-1', {
                    'text-blue-600': isActive,
                  })}
                >
                  {tab.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
