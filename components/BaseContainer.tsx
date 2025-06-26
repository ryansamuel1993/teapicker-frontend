import classNames from 'classnames';
import { ReactNode } from 'react';

interface BaseContainerProps {
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
  isSlim?: boolean;
}

export const BaseContainer = ({ children, className, isFullWidth, isSlim }: BaseContainerProps) => (
  <div
    className={classNames(
      'flex flex-col w-full mx-auto',
      {
        'xl:max-w-dashboard-xl': !isFullWidth,
        '2xl:max-w-dashboard-2xl': !isFullWidth && !isSlim,
      },
      className,
    )}
  >
    {children}
  </div>
);
