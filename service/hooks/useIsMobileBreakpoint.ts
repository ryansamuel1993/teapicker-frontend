import { DESKTOP_BREAKPOINT } from '../constants/breakpoints';
import { useBreakpoint } from './useBreakpoint';

export const useIsMobileBreakpoint = () => {
  return !useBreakpoint(DESKTOP_BREAKPOINT);
};
