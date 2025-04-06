"use client";
import React from "react";
import classes from "./latest.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { Image } from "@/shared/ui";
import { useDeviceStore } from "@/shared/model";

export const Latest = () => {
  const { isMobile } = useDeviceStore();
  const classNames = clsx("container", classes.root);
  return (
    <section className={classNames}>
      <div className={classes.titleSection}>
        <h3 className="title">تازه ‌‌نفس‌های لینا</h3>
        <div className={classes.subTitle}>
          <Image
            width={isMobile ? 25 : 90}
            height={isMobile ? 6 : 22}
            alt=""
            src={"/images/arrow-to-left.svg"}
          />
          <p>جدیدترین محصولاتی که ذائقه‌تان را شگفت‌زده می‌کنند‌‍</p>
          <Image
            width={isMobile ? 25 : 90}
            height={isMobile ? 6 : 22}
            alt=""
            src={"/images/arrow-to-right.svg"}
          />
        </div>
      </div>
      <div className={classes.productsBox}>
        <article>
          <Link href="/">
            <Image
              width={isMobile ? 140 : 234}
              height={isMobile ? 180 : 351}
              alt="crouton"
              src={"/images/meat-chips.png"}
            />
          </Link>
          <div className={classes.textContent}>
            <Link href="/">
              <h3>کروتون با طعم سیر‌و‌پیاز</h3>
            </Link>
            <p>بهترین انتخاب برای سالاد سزار!</p>
          </div>
        </article>
        <article>
          <Link href="/">
            <Image
              width={isMobile ? 147 : 282}
              height={isMobile ? 195 : 380}
              alt="crouton"
              src={"/images/crouton-chips.png"}
            />
          </Link>
          <div className={classes.textContent}>
            <Link href="/">
              <h3>کروتون با طعم سیر‌و‌پیاز</h3>
            </Link>
            <p>بهترین انتخاب برای سالاد سزار!</p>
          </div>
          <span className={classes.circleLight}></span>
        </article>
        <article>
          <Link href="/">
            <Image
              width={isMobile ? 140 : 234}
              height={isMobile ? 180 : 351}
              alt="crouton"
              src={"/images/classic-chips.png"}
            />
          </Link>
          <div className={classes.textContent}>
            <Link href="/">
              <h3>کروتون با طعم سیر‌و‌پیاز</h3>
            </Link>
            <p>بهترین انتخاب برای سالاد سزار!</p>
          </div>
        </article>
        <div className={classes.background}></div>
      </div>
    </section>
  );
};
