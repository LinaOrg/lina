"use client";
import { QualityDesktop } from "./qualityDesktop";
import { QualityMobile } from "./qualityMobile";
import { useDeviceStore } from "@/shared/model";

export const Quality = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <QualityMobile /> : <QualityDesktop />;
};
