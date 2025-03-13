"use client";
import { useEffect } from "react";
import { QualityDesktop } from "./qualityDesktop";
import { QualityMobile } from "./qualityMobile";
import { MOBILE_BREAKPOINT, useDeviceStore } from "@/shared/model";

export const Quality = () => {
  const { isMobile, setIsMobile } = useDeviceStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return isMobile ? <QualityMobile /> : <QualityDesktop />;
};
