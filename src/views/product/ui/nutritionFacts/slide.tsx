"use client";
import { Image } from "@/shared/ui";
import React from "react";
import classes from "./nutritionFacts.module.scss";
import { useDeviceStore } from "@/shared/model";

export const Slide = () => {
  const { isMobile } = useDeviceStore();
  return (
    <article className={classes.slide}>
      <div className={classes.boxWrapper}>
        <div className={classes.box}>
          <div>
            <h5>ایده خلاقانه برای آشپزی!</h5>
            <p>
              “چیپس ما را خرد کنید و به عنوان پودر سوخاری برای مرغ یا سبزیجات
              امتحان کنید”
            </p>
          </div>
          <Image
            src={"/images/flow-image.png"}
            alt={""}
            width={isMobile ? 31 : 60}
            height={isMobile ? 31 : 60}
          />
        </div>
        <div className={classes.box}>
          <div>
            <h5>ایده خلاقانه برای آشپزی!</h5>
            <p>
              “چیپس ما را خرد کنید و به عنوان پودر سوخاری برای مرغ یا سبزیجات
              امتحان کنید”
            </p>
          </div>
          <Image
            src={"/images/flow-image.png"}
            alt={""}
            width={isMobile ? 31 : 60}
            height={isMobile ? 31 : 60}
          />
        </div>
      </div>
      <Flow />
      <Image
        src={"/images/slider.png"}
        alt=""
        width={isMobile ? 158 : 389}
        height={isMobile ? 133 : 280}
      />
    </article>
  );
};

const Flow = () => (
  <svg
    width="151"
    height="238"
    viewBox="0 0 151 238"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M77.5 68L77.5 28C77.5 21.3726 82.8726 16 89.5 16L135.5 16"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M77.5 171L77.5 210C77.5 216.627 82.8726 222 89.5 222L135.5 222"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M77.5 67L77.5 107C77.5 113.627 72.1274 119 65.5 119L20.5 119"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M77.5 170L77.5 131C77.5 124.373 72.1274 119 65.5 119L20.5 119"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect opacity="0.4" y="99" width="40" height="40" rx="20" fill="#FDF3E6" />
    <rect
      x="1"
      y="100"
      width="38"
      height="38"
      rx="19"
      stroke="#FDF3E6"
      strokeWidth="2"
    />
    <circle
      cx="20"
      cy="119"
      r="4.5"
      fill="white"
      stroke="#CD5548"
      strokeWidth="3"
    />
    <path
      d="M134 16L119 16"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M127 24L135 16L127 8"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M134 222L119 222"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M127 230L135 222L127 214"
      stroke="#CD5548"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
