"use client";

import React from "react";
import { useDeviceStore } from "@/shared/model";
import { SkillsListMobile } from "./skillsListMobile";
import { SkillsListDesktop } from "./skillsListDesktop";

export const SkillsList = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <SkillsListMobile /> : <SkillsListDesktop />;
};
