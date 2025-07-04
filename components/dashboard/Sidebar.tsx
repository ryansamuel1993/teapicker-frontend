import { useEffect, useState, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { useRouter } from 'next/router';
import { useTabs } from '@/service/hooks/useTabs';

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

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <DashboardSidebar>
      <Sidebar aria-label="Sidebar">
        <SidebarItems>
          <SidebarItemGroup>
            {tabs.map((tab) => (
              <SidebarItem
                key={tab.label}
                onClick={() => router.push(tab.route)}
                icon={tab.icon}
                labelColor={tab.labelColor}
              >
                {tab.label}
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </DashboardSidebar>
  );
};
