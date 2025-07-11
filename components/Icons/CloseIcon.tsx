import type { FC } from 'react';
import type { IconProps } from './Types';

export const CloseIcon: FC<IconProps> = ({ size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
      <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
