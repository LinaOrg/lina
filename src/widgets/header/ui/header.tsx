"use client";
import React from "react";
import { useDeviceStore } from "@/shared/model";
import { HeaderMobile } from "./header.mobile";
import { HeaderDesktop } from "./header.desktop";

export const Header = () => {
  const { isMobile } = useDeviceStore();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
