import classNames from 'classnames';
import { MouseEventHandler, useMemo, useState } from 'react';
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
  large: 140,
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
  borderClass?: string;
  userInitials?: string;
};

export const UserImage = ({
  size = AvatarSize.normal,
  image,
  className,
  innerClassName,
  onClick,
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
            alt="User"
            width={114}
            height={114}
            style={style}
            imgFormat="webp"
            onError={() => setHasError(true)}
            className={classNames('rounded-full object-cover bg-grey-2', border)}
          />
        ) : null}
      </div>
    </Component>
  );
};
