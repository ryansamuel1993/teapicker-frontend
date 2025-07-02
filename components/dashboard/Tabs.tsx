import { HiChartPie, HiPlay, HiUser } from 'react-icons/hi';
import { PLAY, SETTINGS, TEAMS } from '@/service/constants/routes';

export const Tabs = [
  { label: 'Settings', icon: HiChartPie, route: SETTINGS },
  { label: 'Teams', icon: HiUser, labelText: 'Pro', labelColor: 'dark', route: TEAMS },
  { label: 'Play', icon: HiPlay, labelText: '3', route: PLAY },
];
