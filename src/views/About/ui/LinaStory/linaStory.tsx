"use client";
import { useEffect } from "react";
import { LinaStoryMobile } from "./linaStoryMobile";
import { LinaStoryDesktop } from "./linaStoryDesktop";
import { MOBILE_BREAKPOINT, useDeviceStore } from "@/shared/model";


export const LinaStory = () => {
  const { isMobile, setIsMobile } = useDeviceStore();

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= MOBILE_BREAKPOINT);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice); 
    return () => window.removeEventListener("resize", checkDevice);
  }, [setIsMobile]);

  return isMobile ? <LinaStoryMobile /> : <LinaStoryDesktop />;
};

