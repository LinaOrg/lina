"use client";
import { Image } from "@/shared/ui";
import React from "react";
import classes from "./linaProducts.module.scss";
import { useDeviceStore } from "@/shared/model";

export const Product = () => {
  const { isMobile } = useDeviceStore();
  return (
    <div className={classes.product}>
      <div className={classes.contentWrapper}>
        <h4>خانواده چیپس لینا</h4>
        <p>
          تنوع در چیپس‌های دلینا حرف اول را می‌زند. طعم‌های بی‌نظیری که به تردی
          و تازگی برگه‌های سیب‌زمینی اضافه شده و تجربه متفاوتی از چیپس را برای
          شما رقم می‌زنند. این چیپس‌ها با حداقل چربی و با سالم‌ترین و به‌روزترین
          روش فراوری جهان تولید می‌شوند.
        </p>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src={isMobile ? "/images/potato-mobile.png" : "/images/potato.png"}
          alt=""
          width={isMobile ? 288 : 450}
          height={isMobile ? 238 : 571}
          layout="responsive"
        />
        <div className={classes.stories}>
          <Image
            src={"/images/product-story.png"}
            alt=""
            width={isMobile ? 45 : 108}
            height={isMobile ? 45 : 108}
            className={classes.active}
          />
          <Image
            src={"/images/product-story.png"}
            alt=""
            width={isMobile ? 45 : 108}
            height={isMobile ? 45 : 108}
          />
          <Image
            src={"/images/product-story.png"}
            alt=""
            width={isMobile ? 45 : 108}
            height={isMobile ? 45 : 108}
          />
        </div>
      </div>
    </div>
  );
};
