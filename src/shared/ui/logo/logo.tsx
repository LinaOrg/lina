"use client";
import Link from "next/link";
import React from "react";
import classes from "./logo.module.scss";
import { Image } from "../image";
import { useDeviceStore } from "@/shared/model";

export const Logo = () => {
  const { isMobile } = useDeviceStore();
  return (
    <Link href="/" className={classes.logo}>
      <Image
        alt="لینا"
        src={"/images/logo.svg"}
        width={isMobile ? 31 : 60}
        height={isMobile ? 26 : 50}
      />
    </Link>
  );
};
