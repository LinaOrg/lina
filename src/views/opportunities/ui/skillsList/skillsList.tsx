"use client";

import React, { useEffect } from "react";
import { useDeviceStore } from "@/shared/model";
import { SkillsListMobile } from "./skillsListMobile";
import { SkillsListDesktop } from "./skillsListDesktop";


const MOBILE_BREAKPOINT = 991;

export const SkillsList = () => {
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

  return isMobile ? <SkillsListMobile /> : <SkillsListDesktop />;
};


