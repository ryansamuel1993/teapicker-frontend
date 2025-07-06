import { useEffect, useState, FC, PropsWithChildren, useContext } from 'react';
import classNames from 'classnames';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { TabItem, useTabs } from '@/service/hooks/useTabs';
import { CurrentUserContext } from '@/service/context/CurrentUserProvider';
import { SIGNUP, SIGNOUT } from '@/service/constants/routes';

const DashboardSidebar = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={classNames('hidden md:flex w-full xl:w-4/12 2xl:w-2/12 items-start', className)}>
    <div className="w-full">
      <div className="sticky">{children}</div>
    </div>
  </div>
);

export const SideBar: FC = () => {
  const router = useRouter();
  const tabs = useTabs();
  const { removeCurrentUser } = useContext(CurrentUserContext);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const handleTabClick = (tab: TabItem) => {
    if (tab.disabled) {
      return;
    }

    if (tab.route === SIGNOUT) {
      removeCurrentUser();
      localStorage.removeItem('authToken');
      router.push(SIGNUP);
    } else {
      router.push(tab.route);
    }
  };

  return (
    <DashboardSidebar>
      <Sidebar aria-label="Sidebar">
        <SidebarItems>
          <SidebarItemGroup className="-mt-4">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                className={classNames('relative group', {
                  'cursor-not-allowed opacity-50': tab.disabled,
                })}
              >
                <SidebarItem onClick={() => handleTabClick(tab)} icon={tab.icon} labelColor={tab.labelColor}>
                  {tab.label}
                </SidebarItem>

                {tab.disabled && tab.toolTip && (
                  <div className="absolute z-10 px-2 py-1 ml-2 text-xs text-white transition-opacity -translate-y-1/2 bg-gray-800 rounded shadow-lg opacity-0 left-full top-1/2 w-max whitespace-nowrap group-hover:opacity-100">
                    {tab.toolTip}
                  </div>
                )}
              </div>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </DashboardSidebar>
  );
};
