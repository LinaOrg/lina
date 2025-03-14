import { create } from "zustand";

const MOBILE_BREAKPOINT = 991;

interface DeviceState {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: false,

  setIsMobile: (value: boolean) => set({ isMobile: value }),
}));

export { MOBILE_BREAKPOINT };
