import { ReactNode, SyntheticEvent, useRef, CSSProperties, JSX, useState } from 'react';
import classNames from 'classnames';
import { UserMedia } from '@/service/types/user';

export type ResponsiveImageProps = Omit<JSX.IntrinsicElements['img'], 'src' | 'srcSet' | 'ref' | 'width' | 'height'> & {
  image: UserMedia;
  width?: number;
  height?: number;
  aspectRatio?: CSSProperties['aspectRatio'];
  srcSetBreakpoints?: number[];
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  errorPlaceholder?: ReactNode;
  placeholderClassName?: string;
  refetchTimes?: number;
  imgFormat?: 'webp' | 'avif';
};

export const ResponsiveImage = ({
  image,
  width,
  height,
  alt = '',
  fill,
  style,
  className,
  onError,
  errorPlaceholder,
}: ResponsiveImageProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const [isError, setIsError] = useState(false);

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    setIsError(true);

    onError?.(event);

    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  if (isError && errorPlaceholder) {
    return <>{errorPlaceholder}</>;
  }

  return (
    <img
      ref={ref}
      src={image.url}
      alt={alt}
      onError={handleError}
      width={width}
      height={height}
      className={classNames('object-cover', className)}
      style={{
        ...style,
        ...(fill && {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }),
      }}
      loading="lazy"
    />
  );
};
