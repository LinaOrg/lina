"use client";
import { ValidityDesktop } from "./ui/validityDesktop";
import { ValidityMobile } from "./ui/validityMobile";
import { useDeviceStore } from "@/shared/model";

export const Validity = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <ValidityMobile /> : <ValidityDesktop />;
};
