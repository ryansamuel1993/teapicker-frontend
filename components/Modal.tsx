import { FC, ReactNode, useEffect, useState } from 'react';
import { Modal as FBModal, ModalSizes, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import classNames from 'classnames';
import { Divider } from './Divider';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

interface ModalProps {
  isOpen: boolean;
  onIsOpenChange: (state: boolean) => void;
  title?: string | ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  size?: keyof ModalSizes;
  hasDivider?: boolean;
  bodyClassName?: string;
  noBodyPadding?: boolean;
  bodyMaxHeight?: number;
  withoutHeader?: boolean;
  fullHeight?: boolean;
  confirmation?: boolean;
  headerClassName?: string;
  contentClassName?: string;
  contentInnerClassName?: string;
  withCloseButton?: boolean;
  bgTransparent?: boolean;
  'data-testid'?: string;
}

const theme = ({
  noBodyPadding,
  fullHeight,
  confirmation,
  bodyClassName,
  headerClassName,
  contentClassName,
  withCloseButton = true,
  bgTransparent,
  contentInnerClassName,
}: {
  noBodyPadding?: boolean;
  fullHeight?: boolean;
  confirmation?: boolean;
  bodyClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  withCloseButton?: boolean;
  bgTransparent?: boolean;
  contentInnerClassName?: string;
} = {}) => {
  return {
    root: {
      base: 'fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: classNames('flex backdrop-blur-xl', {
          'bg-gray-900 bg-opacity-50': !bgTransparent,
        }),
        off: 'hidden',
      },
      positions: {
        center: 'items-center justify-center',
      },
    },
    content: {
      base: classNames(
        'relative md:h-full w-full sm:p-4 md:h-auto flex items-end md:items-center mt-auto md:mt-0',
        contentClassName,
      ),
      inner: classNames(
        'relative flex flex-col rounded-t-3xl sm:rounded-b-3xl shadow w-full',
        {
          'h-screen': fullHeight,
          'bg-gradient-block': !bgTransparent,
          'bg-gradient-red-to-dark': confirmation && !bgTransparent,
        },
        contentClassName,
        contentInnerClassName,
      ),
    },
    body: {
      base: classNames('flex-1', !noBodyPadding && 'px-4', bodyClassName),
      popup: 'pt-0',
    },
    header: {
      base: classNames('flex items-center justify-between rounded-t-3xl py-4 px-4', headerClassName),
      popup: 'border-b-0 p-2',
      title: 'text-body font-medium text-white',
      close: {
        base: `ml-auto inline-flex items-center rounded-3xl bg-transparent p-1.5 text-sm text-white hover:bg-gray-200 hover:text-gray-900 ${!withCloseButton && 'hidden'}`,
        icon: 'size-4',
      },
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6',
      popup: 'border-t-3xl',
    },
  };
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onIsOpenChange,
  title,
  children,
  actions,
  size = 'md',
  hasDivider,
  bodyClassName,
  noBodyPadding,
  bodyMaxHeight,
  withoutHeader,
  fullHeight,
  confirmation,
  headerClassName,
  contentClassName,
  withCloseButton,
  bgTransparent,
  contentInnerClassName,
  'data-testid': dataTestId,
}) => {
  const [root, setRoot] = useState<HTMLElement | undefined>();

  const isMobile = useIsMobileBreakpoint();

  useEffect(() => {
    const el = document.querySelector('main');

    if (el) {
      setRoot(el);
    }
  }, []);

  return (
    <FBModal
      dismissible
      show={isOpen}
      onClose={() => onIsOpenChange(false)}
      data-testid={dataTestId}
      theme={theme({
        bodyClassName,
        confirmation,
        noBodyPadding,
        fullHeight,
        headerClassName,
        contentClassName,
        withCloseButton,
        bgTransparent,
        contentInnerClassName,
      })}
      size={isMobile ? 'md' : (size as string)}
      root={root}
    >
      {!withoutHeader && <ModalHeader className="text-center">{title}</ModalHeader>}
      <ModalBody style={{ maxHeight: bodyMaxHeight, top: '100px' }}>{children}</ModalBody>
      {hasDivider && <Divider className="mb-0" />}
      {!!actions && <ModalFooter>{actions}</ModalFooter>}
    </FBModal>
  );
};

export default Modal;
