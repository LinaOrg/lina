"use client"

import { useEffect } from "react";
import { ValidityDesktop } from "./ui/validityDesktop";
import { ValidityMobile } from "./ui/validityMobile";
import { MOBILE_BREAKPOINT, useDeviceStore } from "@/shared/model";


export const Validity = () => {
  const { isMobile, setIsMobile } = useDeviceStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return isMobile ? <ValidityMobile /> : <ValidityDesktop />;
};
