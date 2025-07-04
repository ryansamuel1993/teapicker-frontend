import classNames from 'classnames';
import { Chip } from './Chip';

type AvailableChipProps = {
  isSmall?: boolean;
  className?: string;
};

export const AvailableChip = ({ isSmall, className }: AvailableChipProps) => (
  <Chip
    isSmall={isSmall}
    iconPosition="none"
    textClassName="ml-0"
    className={classNames('bg-green-500 text-white', className)}
    text="Online"
  />
);
