import { ReactNode } from 'react';
import classNames from 'classnames';

type ErrorMessageProps = {
  children: ReactNode;
  className?: string;
};

export const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  const classes = classNames('text-sm text-red-700 bg-transparent text-center border-red-200 p-3 rounded', className);

  return (
    <div className={classes} role="alert" aria-live="assertive">
      {children}
    </div>
  );
};
