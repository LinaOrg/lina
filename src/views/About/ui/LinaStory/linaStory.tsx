"use client";
import { useEffect } from "react";
import { LinaStoryMobile } from "./linaStoryMobile";
import { LinaStoryDesktop } from "./linaStoryDesktop";
import { MOBILE_BREAKPOINT, useDeviceStore } from "@/shared/model";


export const LinaStory = () => {
  const { isMobile } = useDeviceStore();


  return isMobile ? <LinaStoryMobile /> : <LinaStoryDesktop />;
};

