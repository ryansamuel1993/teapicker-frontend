import classNames from 'classnames';
import { ReactNode } from 'react';

interface ChipProps {
  className?: string;
  textClassName?: string;
  icon?: ReactNode;
  text: string;
  isSmall?: boolean;
  iconPosition?: 'left' | 'right' | 'none';
}

export const Chip = ({ icon, text, className, textClassName, isSmall, iconPosition = 'left' }: ChipProps) => {
  const iconRender = icon ? (
    <div
      className={classNames({
        'mr-1.5': iconPosition === 'left',
        'ml-1.5': iconPosition === 'right',
        '': iconPosition === 'none',
      })}
    >
      {icon}
    </div>
  ) : null;

  return (
    <div
      className={classNames('flex rounded-full w-fit items-center', isSmall ? 'py-1 px-1.5' : 'py-1.5 px-2', className)}
    >
      {iconPosition === 'left' && iconRender}
      <span className={classNames('my-auto leading-none text-notes', textClassName)}>{text}</span>
      {iconPosition === 'right' && iconRender}
    </div>
  );
};
