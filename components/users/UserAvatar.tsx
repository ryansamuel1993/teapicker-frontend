import { UserImage, AvatarSize } from './UserImage';
import { AvailableChip } from '../AvailableChip';
import { MediaType, User } from '@/service/types/user';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

type UserUserProps = {
  user: User;
  size?: AvatarSize | number;
  onClick?: () => void;
  className?: string;
  hideAvailableChip?: boolean;
  editAnchorClassName?: string;
  borderClass?: string;
};

export const UserAvatar = ({
  user,
  onClick,
  hideAvailableChip,
  size = AvatarSize.large,
  className,
  borderClass,
}: UserUserProps) => {
  const isMobile = useIsMobileBreakpoint();
  const { isAvailable, media } = user;

  const image = media?.find((x) => x.type === MediaType.Avatar);

  return (
    <div className="inline-flex flex-col items-center">
      <UserImage
        isAvailable={isAvailable}
        image={image}
        size={size}
        onClick={onClick}
        className={className}
        borderClass={borderClass}
      />

      {isAvailable && !hideAvailableChip && (
        <div className="mt-1">
          <AvailableChip isSmall={isMobile} />
        </div>
      )}
    </div>
  );
};
