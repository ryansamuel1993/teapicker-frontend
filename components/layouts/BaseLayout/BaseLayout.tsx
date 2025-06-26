import classNames from 'classnames';
import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { AppFooter as Footer } from '@/components/Footer';
import { DashboardHeader } from '@/components/header/DashboardHeader';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

export const MOBILE_HEADER_HEIGHT = 65;
export const DESKTOP_HEADER_HEIGHT = 80;
export const TABBAR_HEIGHT = 54;

type BaseLayoutProps = {
  children: ReactNode;
  hideMobileHeader?: boolean;
};

export const BaseLayout: FC<BaseLayoutProps> & {
  MainContent: typeof MainContent;
} = ({ children, hideMobileHeader = false }: BaseLayoutProps) => {
  const isMobile = useIsMobileBreakpoint();

  if (isMobile) {
    return (
      <>
        {!hideMobileHeader && <DashboardHeader />}
        {children}
        {/* your custom footer */}
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="relative w-full flex mx-auto">
        <div className="flex-1 w-full max-w-full">
          <DashboardHeader />
          <div className="flex">{children}</div>
        </div>
      </div>
      {/* your custom footer */}
      <Footer />
    </>
  );
};

type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const MainContent = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, style, ...props }, ref) => (
    <div className="bg-blue-300 w-full min-h-screen">
      <div
        ref={ref}
        className={classNames('w-full lg:w-[65%]', className)}
        style={style}
        {...props}
      >
        {children}
      </div>
    </div>
  )
);

MainContent.displayName = 'MainContent';
BaseLayout.MainContent = MainContent;