import { useBreakpoint } from "./useBreakpoint";

const DESKTOP_BREAKPOINT = 'md';

export const useIsMobileBreakpoint = () => {
  return useBreakpoint(DESKTOP_BREAKPOINT);
};
