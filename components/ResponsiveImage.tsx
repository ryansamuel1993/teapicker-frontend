import { ReactNode, SyntheticEvent, useRef, useState, CSSProperties } from 'react';
import classNames from 'classnames';

type ContentMedia = {
  id: string;
  url: string;
  visible: boolean;
};

type ResponsiveImageProps = {
  image: ContentMedia;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  errorPlaceholder?: ReactNode;
};

export const ResponsiveImage = ({
  image,
  alt = '',
  width,
  height,
  className,
  style,
  errorPlaceholder,
}: ResponsiveImageProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const [isError, setIsError] = useState(false);

  const handleError = (_: SyntheticEvent<HTMLImageElement>) => {
    setIsError(true);
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
      style={style}
      loading="lazy"
    />
  );
};
