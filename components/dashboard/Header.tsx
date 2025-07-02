import { Navbar, NavbarBrand } from 'flowbite-react';
import { NotificationsButton } from '@/components/Notifcations';
import { useNotifications } from '@/service/hooks/useNotifications';

export const Header = () => {
  const notifications = useNotifications();

  const handleNotifications = () => {
    console.log('Notifications clicked');
  };

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 justify-between text-white bg-gray-900">
      <NavbarBrand href="/">
        <span className="text-3xl font-semibold text-center text-teal-400">Tea Picker</span>
      </NavbarBrand>

      <NotificationsButton notifications={notifications} onClick={handleNotifications} />
    </Navbar>
  );
};
