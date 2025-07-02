import classNames from 'classnames';
import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';
import { Header } from '@/components/dashboard/Header';
import { SideBar } from '@/components/dashboard/Sidebar';
import { BottomTabs } from '@/components/dashboard/BottomTabs';

export const MOBILE_HEADER_HEIGHT = 65;
export const DESKTOP_HEADER_HEIGHT = 80;
export const TABBAR_HEIGHT = 54;

type BaseLayoutProps = {
  children: ReactNode;
  hideMobileHeader?: boolean;
};

export const BaseLayout: FC<BaseLayoutProps> & { MainContent: typeof MainContent } = ({
  children,
  hideMobileHeader = false,
}) => {
  const isMobile = useIsMobileBreakpoint();

  if (isMobile) {
    return (
      <>
        {!hideMobileHeader && <Header />}
        <div className="pb-14">{children}</div>
        <BottomTabs />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-64 bg-gray-900 border-r border-gray-700">
          <SideBar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const MainContent = forwardRef<HTMLDivElement, ContentProps>(({ children, className, style, ...props }, ref) => (
  <div className="w-full min-h-screen bg-blue-300">
    <div ref={ref} className={classNames('w-full', className)} style={style} {...props}>
      {children}
    </div>
  </div>
));

MainContent.displayName = 'MainContent';
BaseLayout.MainContent = MainContent;
