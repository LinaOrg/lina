"use client";

import React from "react";
import { useDeviceStore } from "@/shared/model";
import { ImageListDesktop } from "./imageListDesktop";
import { ImageListMobile } from "./imageListMobile/imageListMobile";

export const ImageList = () => {
  const { isMobile } = useDeviceStore();

  return isMobile ? <ImageListMobile /> : <ImageListDesktop />;
};
