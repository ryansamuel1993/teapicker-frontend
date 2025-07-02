import classNames from 'classnames';

export enum DividerStyle {
  Light = 'light',
  Strong = 'strong',
}

interface DividerProps {
  className?: string;
  dividerStyle?: DividerStyle;
  width?: string;
}

export const Divider = ({ className, dividerStyle = DividerStyle.Strong, width = 'w-full' }: DividerProps) => {
  return (
    <div
      className={classNames(className, {
        'relative h-[1px] bg-white/25 my-4 rounded-full': true,
        'relative h-[1px] bg-white/50 my-4 rounded-full': dividerStyle === DividerStyle.Strong,
        [width]: width,
      })}
    />
  );
};
