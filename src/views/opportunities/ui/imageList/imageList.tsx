"use client";

import React, { useEffect } from "react";
import { useDeviceStore } from "@/shared/model";
import { ImageListDesktop } from "./imageListDesktop";
import { ImageListMobile } from "./imageListMobile/imageListMobile";

const MOBILE_BREAKPOINT = 991;

const ImageList = () => {
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

  return isMobile ? <ImageListMobile /> : <ImageListDesktop />;
};

export default ImageList;
