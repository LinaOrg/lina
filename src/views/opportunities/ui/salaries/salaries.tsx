"use client";

import React, { useEffect } from "react";
import { useDeviceStore } from "@/shared/model";
import { SalariesMobile } from "./salariesMobile";
import { SalariesDesktop } from "./salariesDesktop";


const MOBILE_BREAKPOINT = 991;

export const Salaries = () => {
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

  return isMobile ? <SalariesMobile /> : <SalariesDesktop/>;
};


