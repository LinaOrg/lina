"use client";

import React from "react";
import { ConditionsDesktop } from "./conditionsDesktop";
import { ConditionMobile } from "./conditionsMobile";
import { useDeviceStore } from "@/shared/model";

export const Conditions: React.FC = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <ConditionMobile /> : <ConditionsDesktop />;
};
