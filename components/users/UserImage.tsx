import classNames from 'classnames';
import { JSX, MouseEventHandler, useMemo, useState } from 'react';
import { ResponsiveImage } from '../ResponsiveImage';
import { UserMedia } from '@/service/types/user';

export enum AvatarSize {
  xTiny = 'xTiny',
  tiny = 'tiny',
  buttonStandard = 'buttonStandard',
  extraSmall = 'extraSmall',
  small = 'small',
  normal = 'normal',
  large = 'large',
}

const SIZE_MAP: Record<AvatarSize, number> = {
  xTiny: 20,
  tiny: 22,
  buttonStandard: 30,
  extraSmall: 36,
  small: 52,
  normal: 76,
  large: 114,
};

const TEXT_CLASS_MAP: Record<AvatarSize, string> = {
  xTiny: 'text-heading-sm',
  tiny: 'text-heading-sm',
  buttonStandard: 'text-heading-sm',
  extraSmall: 'text-heading-sm',
  small: 'text-heading-sm',
  normal: 'text-heading-xl',
  large: 'text-heading-xl',
};

const getBorderClass = (size: AvatarSize | number) => {
  const px = typeof size === 'number' ? size : SIZE_MAP[size];

  if (px >= 100) {
    return 'm-[3px]';
  }

  if (px >= 60) {
    return 'm-[2px]';
  }

  if (px >= 32) {
    return 'm-[1px]';
  }

  return '';
};

type UserImageProps = {
  image?: UserMedia;
  onClick?: MouseEventHandler<HTMLElement>;
  size?: AvatarSize | number;
  isAvailable?: boolean;
  className?: string;
  innerClassName?: string;
  UserIcon?: JSX.Element;
  borderClass?: string;
  userInitials?: string;
};

export const UserImage = ({
  size = AvatarSize.normal,
  image,
  className,
  innerClassName,
  onClick,
  UserIcon,
  borderClass,
}: UserImageProps) => {
  const [hasError, setHasError] = useState(false);
  const isButton = Boolean(onClick);
  const Component = isButton ? 'button' : 'div';

  const pixelSize = useMemo(() => (typeof size === 'number' ? size : SIZE_MAP[size]), [size]);

  const style = { width: pixelSize, height: pixelSize, minWidth: pixelSize };
  const border = classNames(getBorderClass(size), borderClass);

  return (
    <Component onClick={onClick} className={classNames('flex items-center justify-center', className)}>
      <div className={classNames('relative rounded-full', innerClassName)}>
        {image && !hasError ? (
          <ResponsiveImage
            image={image}
            alt="User User"
            width={114}
            height={114}
            style={style}
            imgFormat="webp"
            onError={() => setHasError(true)}
            className={classNames('rounded-full object-cover bg-grey-2', border)}
          />
        ) : (
          (UserIcon ?? (
            <div
              className={classNames(
                'rounded-full bg-[#4F3F3F] flex items-center justify-center text-white font-semibold overflow-hidden',
                TEXT_CLASS_MAP[size as AvatarSize],
                border,
              )}
              style={style}
            />
          ))
        )}
      </div>
    </Component>
  );
};
