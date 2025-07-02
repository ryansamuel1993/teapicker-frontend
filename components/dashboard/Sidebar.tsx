import classNames from 'classnames';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { Tabs } from './Tabs';

const DashboardSidebar = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={classNames('hidden md:flex w-full xl:w-4/12 2xl:w-2/12 items-start', className)}>
    <div className="w-full">
      <div className="sticky">{children}</div>
    </div>
  </div>
);

export const SideBar: FC = () => {
  const router = useRouter();

  return (
    <DashboardSidebar>
      <Sidebar aria-label="Sidebar">
        <SidebarItems>
          <SidebarItemGroup>
            {Tabs.map((tab) => (
              <SidebarItem
                key={tab.label}
                href="#"
                onClick={() => router.push(tab.route)}
                icon={tab.icon}
                label={tab.labelText}
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
