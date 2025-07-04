import { ReactNode } from 'react';

type ErrorMessageProps = {
  children: ReactNode;
  className?: string;
};

const ErrorMessage = ({ children, className = '' }: ErrorMessageProps) => {
  return (
    <div
      className={`text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded ${className}`}
      role="alert"
      aria-live="assertive"
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
