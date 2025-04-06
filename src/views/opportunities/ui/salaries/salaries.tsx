"use client";

import React from "react";
import { useDeviceStore } from "@/shared/model";
import { SalariesMobile } from "./salariesMobile";
import { SalariesDesktop } from "./salariesDesktop";

const MOBILE_BREAKPOINT = 991;

export const Salaries = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <SalariesMobile /> : <SalariesDesktop />;
};
