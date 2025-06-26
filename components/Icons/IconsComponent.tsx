import { ComponentProps, FC, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { IconType } from './IconTypes';

interface IconComponentProps extends ComponentProps<'svg'> {
  name: IconType;
}

export const IconComponent: FC<IconComponentProps> = ({ name, ...props }) => {
  const DynamicIcon = useMemo(() => dynamic<ComponentProps<'svg'>>(() => import(`@/public/icons/${name}.svg`)), [name]);

  return <DynamicIcon {...props} />;
};
