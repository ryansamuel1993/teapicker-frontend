'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { Tabs } from './Tabs';

export const BottomTabs = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow h-14">
      <ul className="flex items-center justify-around h-full text-sm font-medium text-gray-700">
        {Tabs.map(({ label, icon: Icon, route, labelText, labelColor }) => {
          const isActive = pathname === route;

          return (
            <li key={route}>
              <Link href={route} aria-label={label} className="relative flex flex-col items-center justify-center">
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

                {labelText && (
                  <span
                    className={classNames(
                      'absolute -top-1 -right-2 text-[10px] text-white px-1.5 py-0.5 rounded-full text-center',
                      labelColor,
                    )}
                  >
                    {labelText}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
