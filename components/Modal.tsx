import { FC, ReactNode } from 'react';
import { Modal as FBModal, ModalSizes, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import classNames from 'classnames';
import { DynamicStringEnumKeysOf } from 'flowbite-react/types';
import { Divider } from './Divider';
import BackButton from './button/BackButton';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  title?: string | ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  size?: DynamicStringEnumKeysOf<ModalSizes>;
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
  footerClassName?: string;
  showBackButton?: boolean;
}

const theme = ({
  noBodyPadding,
  fullHeight,
  confirmation,
  bodyClassName,
  headerClassName,
  contentClassName,
  withCloseButton = false,
  bgTransparent,
  footerClassName,
  contentInnerClassName,
}: Partial<ModalProps>) => {
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
        'relative md:h-full w-full sm:p-4 md:h-auto flex md:items-center mt-auto md:mt-0',
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
      base: classNames('flex items-center justify-center rounded-t-3xl py-4 px-4', headerClassName),
      popup: 'border-b-0 p-2',
      title: classNames('text-body font-medium text-white', withCloseButton && 'ml-auto'),
      close: {
        base: `mr-0 inline-flex items-center rounded-3xl bg-transparent p-1.5 text-sm text-white hover:bg-gray-200 hover:text-gray-900 ${
          !withCloseButton && 'hidden'
        }`,
        icon: 'size-4',
      },
    },
    footer: {
      base: classNames('flex items-center space-x-2 rounded-b border-gray-200 p-6', footerClassName),
      popup: 'border-t-3xl',
    },
  };
};

const Modal: FC<ModalProps> = ({
  isOpen,
  setIsOpen,
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
  footerClassName,
  contentInnerClassName,
  showBackButton = true,
}) => {
  const isMobile = useIsMobileBreakpoint();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <FBModal
      dismissible
      show={isOpen}
      popup={false}
      onClose={handleClose}
      theme={theme({
        bodyClassName,
        confirmation,
        noBodyPadding,
        fullHeight,
        headerClassName,
        contentClassName,
        withCloseButton,
        bgTransparent,
        footerClassName,
        contentInnerClassName,
      })}
      size={isMobile ? 'md' : size}
    >
      {!withoutHeader && (
        <div className="relative flex items-center justify-center px-4 border-b-[0.5px] text-white  border-gray-400">
          {showBackButton && (
            <div className="absolute -translate-y-1/2 left-4 top-1/2">
              <BackButton />
            </div>
          )}

          <ModalHeader className="w-full text-base font-medium text-center truncate">{title}</ModalHeader>
        </div>
      )}

      <ModalBody style={{ maxHeight: bodyMaxHeight, top: '100px' }}>{children}</ModalBody>
      {hasDivider && <Divider className="mr-20" />}
      {!!actions && <ModalFooter>{actions}</ModalFooter>}
    </FBModal>
  );
};

export default Modal;
