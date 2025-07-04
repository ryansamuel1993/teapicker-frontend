'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useTabs } from '@/service/hooks/useTabs';

export const BottomTabs = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const tabs = useTabs();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow h-14">
      <ul className="flex items-center justify-around h-full text-sm font-medium text-gray-700">
        {tabs.map(({ label, icon: Icon, route }) => {
          const isActive = pathname === route;

          return (
            <li key={route}>
              <Link href={route} className="relative flex flex-col items-center justify-center">
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
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
