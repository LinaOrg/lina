"use client";

import classes from "./heroSection.module.scss";
import clsx from "clsx";
import { Button, Image } from "@/shared/ui";
import { useDeviceStore } from "@/shared/model";
export const HeroSection = () => {
  const { isMobile } = useDeviceStore();
  const classNames = clsx("container", classes.heroSection);
  return (
    <section className={classes.root}>
      <div className={classNames}>
        <div className={classes.textContent}>
          <h2 className="title">
            <span>خوش‌آمدید</span>
            <span>به اردوی مزرعه کسب‌و‌کار لینا</span>
          </h2>
          <p>
            ما برای همراهی تیم خلاق و پشتیبانی از پرسنل حرفه‌ای خودمان، شما را
            به اردوی مزرعه کسب‌و‌کار لینا دعوت می کنیم
          </p>
          <Button
            size={isMobile ? "xs" : "md"}
            onClick={() => {
              console.log("clicked");
            }}>
            ورود به اردو
          </Button>
        </div>
        <div>
          <Image
            src={"/images/hero-section.gif"}
            alt="hero-section-bg"
            width={750}
            height={595}
            layout="responsive"
          />
        </div>
      </div>
      <Image
        src={"/images/hero-section-bg.svg"}
        alt="hero-section-bg"
        fill
        className={classes.heroSectionBg}
      />
    </section>
  );
};
