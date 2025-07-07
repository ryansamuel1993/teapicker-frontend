import type { FC, ButtonHTMLAttributes } from 'react';
import { Button } from 'flowbite-react';
import { HiSave } from 'react-icons/hi';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';

type SaveButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SaveButton: FC<SaveButtonProps> = ({ children, className, ...props }) => {
  const t = useTranslations('Common');

  return (
    <Button className={classNames('flex items-center gap-2 ml-auto border', className)} {...props}>
      <HiSave className="text-lg" />
      {children ?? t('save')}
    </Button>
  );
};
