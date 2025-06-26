import { BellIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import {
  Navbar,
  NavbarLink,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Button,
  Badge,
  DropdownDivider,
} from 'flowbite-react';
import React from 'react';

const NAV_LINKS = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Markets', href: '/markets' },
  { label: 'Trade', href: '/trade' },
  { label: 'Reports', href: '/reports' },
  { label: 'Support', href: '/support' },
];

export const DashboardHeader = () => {
  const balance = 12345.67;
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  };

  const handleTrade = () => {
    console.log('Trade button clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleNotifications = () => {
    console.log('Notifications clicked');
  };

  return (
    <Navbar fluid rounded className="bg-gray-900 text-white sticky top-0 z-50">
      <NavbarBrand href="/">
        <ChartBarIcon className="h-8 w-8 text-teal-400 mr-2" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-teal-400">
          MyBroker
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-1 px-3 py-2 bg-gray-800 rounded">
          <span className="text-sm text-gray-300">Balance:</span>
          <span className="font-medium text-white">${balance.toFixed(2)}</span>
        </div>

        <button
          onClick={handleNotifications}
          className="relative p-1 rounded hover:bg-gray-800 focus:outline-none"
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6 text-gray-300" />
          <Badge color="failure" size="xs" className="absolute top-0 right-0">
            3
          </Badge>
        </button>

        <Dropdown
          inline
          label={<Avatar img={user.avatarUrl} rounded size="sm" alt="User avatar" />}
          arrowIcon={false}
        >
          <DropdownHeader>
            <span className="block text-sm">{user.name}</span>
            <span className="block text-xs text-gray-400 truncate">
              {user.email}
            </span>
          </DropdownHeader>
          <DropdownItem onClick={handleTrade}>New Trade</DropdownItem>
          <DropdownItem href="/account">Account Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
        </Dropdown>

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        {NAV_LINKS.map(({ label, href }) => (
          <NavbarLink key={label} href={href} className="hover:text-teal-400">
            {label}
          </NavbarLink>
        ))}
        <Button
          onClick={handleTrade}
          size="sm"
          color="teal"
          className="mt-2 sm:mt-0 sm:hidden w-full"
        >
          Trade now
        </Button>
      </NavbarCollapse>
    </Navbar>
  );
};
