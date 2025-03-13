"use client";
import { Image } from "@/shared/ui";
import React from "react";
import classes from "./standards.module.scss";
import { useDeviceStore } from "@/shared/model";

export const Standards = () => {
  const { isMobile } = useDeviceStore();
  return (
    <section className={classes.root}>
      <Image
        src={"/images/standard-4.png"}
        alt={""}
        width={isMobile ? 59 : 122}
        height={isMobile ? 75 : 155}
      />
      <Image
        src={"/images/standard-3.png"}
        alt={""}
        width={isMobile ? 74 : 193}
        height={isMobile ? 59 : 155}
      />
      <Image
        src={"/images/standard-2.png"}
        alt={""}
        width={isMobile ? 57 : 155}
        height={isMobile ? 59 : 155}
      />
      <Image
        src={"/images/standard-1.png"}
        alt={""}
        width={isMobile ? 61 : 170}
        height={isMobile ? 59 : 152}
      />
    </section>
  );
};
