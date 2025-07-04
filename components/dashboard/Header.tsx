import { useTranslations } from 'next-intl';
import { JavaIcon } from '../icons/JavaIcon';
import { NotificationsButton } from '@/components/button/NotificationsButton';
import { useNotifications } from '@/service/hooks/useNotifications';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';

export const Header = () => {
  const { notifications, handleNotification } = useNotifications();
  const t = useTranslations('Common');
  const isMobile = useIsMobileBreakpoint();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 text-white bg-gray-900">
      <div className="flex items-center ml-2 text-center">
        <a href="/" className="flex items-center space-x-2">
          <JavaIcon size={isMobile ? 50 : 40} />
          <p className="mt-2">{t('title')}</p>
        </a>
      </div>

      <NotificationsButton notifications={notifications} onClick={handleNotification} />
    </header>
  );
};
