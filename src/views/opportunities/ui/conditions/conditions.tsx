"use client";


import React, { useEffect } from "react";
import { ConditionsDesktop } from "./conditionsDesktop";
import { ConditionMobile } from "./conditionsMobile";
import { useDeviceStore } from "@/shared/model";

export const Conditions: React.FC = () => {
  const { isMobile, setIsMobile } = useDeviceStore();

  useEffect(() => {
    setIsMobile();

    const handleResize = () => {
      setIsMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return isMobile ? <ConditionMobile /> : <ConditionsDesktop />;
};
